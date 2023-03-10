import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import ImagePostButton from 'components/offer/buy/common/ImagePostButton';
import UserInput from 'components/offer/buy/common/UserDescriptionInput';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import SmallButton from 'components/offer/buy/common/SmallButton';
import UserCountInput from 'components/offer/buy/common/UserCountInput';
import UserOfferNumberInput from 'components/offer/buy/common/UserOfferNumberInput';
import CancelButton from 'public/assets/icons/imageUploadCancel.svg';

import { getLocalNumber } from 'utils/price';
import { useRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';

type UploadImage = {
  file: File | null;
  thumbnail: string;
  type: string;
};

interface SelectedSaleContainerProps {
  isLimitOrder: boolean;
  maximumPrice: number;
  maxCount: number;
  limitOrderPrice: number;
  src?: string;
}

export default function SelectedSaleContainer({
  isLimitOrder,
  maxCount,
  limitOrderPrice,
  maximumPrice,
  src,
}: SelectedSaleContainerProps) {
  const [offerData, setOfferData] = useRecoilState(buyoffer);
  const [selectedButton, setSelectedButton] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [inputCount, setInputCount] = useState('');
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const [inputDescription, setInputDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formData = new FormData();

  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  let countOverCheck = maxCount < Number(inputCount);

  const ButtonName = Object.freeze({
    ALL: '일괄 구매',
    INDIVIDUAL: '일부 구매',
  });

  useEffect(() => {
    if (selectedButton === ButtonName.ALL) {
      setOfferData((prev) => ({ ...prev, productCount: maxCount, description: '' }));
    }
    if (selectedButton === ButtonName.INDIVIDUAL) {
      setOfferData((prev) => ({ ...prev, productCount: null }));
    }
  }, [offerData.purchaseOption]);

  const resetToDefaultValue = () => {
    setInputNumber('');
    setInputCount('');
    if (isLimitOrder) {
      setOfferData((prev) => ({ ...prev, description: '' }));
    }
    if (isLimitOrder === false) {
      setOfferData((prev) => ({ ...prev, description: '', price: null }));
    }
  };

  const handleChoiceBulkButton = () => {
    resetToDefaultValue();
    setSelectedButton(ButtonName.ALL);
  };

  const handleChoiceIndividualButton = () => {
    resetToDefaultValue();
    setSelectedButton(ButtonName.INDIVIDUAL);
  };

  const Tooltip = () => {
    switch (selectedButton) {
      case ButtonName.ALL:
        return '모든 상품을 구매해요';
      case ButtonName.INDIVIDUAL:
        return '일부 상품을 구매해요';
      default:
        return;
    }
  };

  const handleNumberInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '').replace(/,/g, '');
    setInputNumber(value);
    setOfferData((prev) => ({ ...prev, price: Number(value) }));
  }, []);

  const handleCountInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    setInputCount(value);
    setOfferData((prev) => ({ ...prev, productCount: Number(value) }));
  }, []);

  const handleDescriptionInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value);
    setOfferData((prev) => ({ ...prev, description: e.target.value }));
  }, []);

  const handleCheckfileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      fileList && formData.append('image', fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });

      setOfferData((prev) => ({ ...prev, image: fileList[0] }));
    }
  };

  const handleDeleteImage = () => {
    if (imageFile !== null) {
      setImageFile(null);
      setOfferData((prev) => ({ ...prev, image: null }));
    }
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return <img src="hi" alt="blankImage" />;
    }
    return (
      <>
        <ShowFileImage src={imageFile.thumbnail} />;
        <StyledImageDeleteButton onClick={handleDeleteImage}>
          <CancelButton />
        </StyledImageDeleteButton>
      </>
    );
  }, [imageFile]);

  return (
    <Root>
      <StyledTitleContainer>
        <MainText text="구매 희망 상품을 표시한 사진을 등록해주세요" />
        <SubText text="일괄 구매하는 경우에는 표시하지 않아도 돼요" isMainColor={false} />
      </StyledTitleContainer>
      <StyledImagePostWrapper>
        {imageFile ? (
          showImage
        ) : (
          <>
            <ImagePostButton buttonSize="big" htmlFor="file" onChange={handleCheckfileInput} />
            <ImageUploadInput
              style={{ display: 'none' }}
              type="file"
              id="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={uploadProfile}
            />
          </>
        )}
      </StyledImagePostWrapper>
      <SmallButtonContainer>
        <SmallButton text="일괄 구매" selectedButton={selectedButton} onClick={handleChoiceBulkButton} />
        <SmallButton text="일부 구매" selectedButton={selectedButton} onClick={handleChoiceIndividualButton} />
      </SmallButtonContainer>
      <SubtitleContainer>{Tooltip()}</SubtitleContainer>

      {selectedButton === ButtonName.INDIVIDUAL ? (
        <>
          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text="구매 희망 상품의 개수를 입력하세요" />
            </StyledTextContainer>
            <UserCountInput
              placeholder="정확한 상품의 갯수를 입력해주세요"
              inputTextGuide="개"
              onChangeFunc={handleCountInput}
              inputText={inputCount.replace(/(^0+)/, '')}
              countOverCheck={countOverCheck}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text="판매자에게 제시 옵션을 한줄로 설명해주세요" />
              <SubText text="표시한 포카 4장 구매원함, 마크 셀포 브이 1장 구매," isMainColor={false} />
              <SubText text="핑크색머리 천러 중복 3장 등 이해하기 쉽게 설명해주세요" isMainColor={false} />
            </StyledTextContainer>
            <UserInput
              placeholder="상품이름, 일괄여부, 개수, 종류, 중복 여부 등"
              inputTextGuide=""
              onChangeFunc={handleDescriptionInput}
              inputText={inputDescription}
            />
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text={isLimitOrder ? '구매하는 가격을 확인하세요' : '구매 희망가격을 제시하세요'} />
            </StyledTextContainer>
            <UserOfferNumberInput
              placeholder={
                isLimitOrder ? limitOrderPrice.toString().replace(priceRegex, ',') : '500원 단위로 입력해주세요'
              }
              inputTextGuide="원"
              onChangeFunc={handleNumberInput}
              inputText={inputNumber.replace(/(^0+)/, '')}
              isLimitOrder={isLimitOrder}
              maximumPrice={maximumPrice}
            />
            {/* //TODO: 차후에는 현재 최고가를 받아와서 렌더링해야함 */}
          </StyledInputContainer>
        </>
      ) : (
        <>
          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text={isLimitOrder ? '구매하는 가격을 확인하세요' : '구매 희망가격을 제시하세요'} />
            </StyledTextContainer>
            <UserOfferNumberInput
              placeholder={
                isLimitOrder ? limitOrderPrice.toString().replace(priceRegex, ',') : '500원 단위로 입력해주세요'
              }
              inputTextGuide="원"
              onChangeFunc={handleNumberInput}
              inputText={inputNumber.replace(/(^0+)/, '')}
              isLimitOrder={isLimitOrder}
              maximumPrice={maximumPrice}
              isofferAllItems
            />
            {/* //TODO: 차후에는 현재 최고가를 받아와서 렌더링해야함 */}
            <SubtitleContainer>
              {selectedButton !== ButtonName.INDIVIDUAL &&
                isLimitOrder === false &&
                `현재 최고제시가격 ${getLocalNumber(maximumPrice)}원`}
            </SubtitleContainer>
          </StyledInputContainer>
        </>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageUploadInput = styled.input``;

const SmallButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
`;

const StyledTitleContainer = styled.div`
  margin: 1.8rem 0 2.4rem 0;
`;

const StyledImagePostWrapper = styled.div`
  position: relative;

  margin-bottom: 2rem;
  width: 100%;
  height: 24.2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

const SubtitleContainer = styled.div`
  margin: 0.8rem 0 4rem 0;

  ${theme.fonts.regular14pt}
  color: ${theme.colors.main};
`;

const ShowFileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  object-fit: fill;
`;

const StyledImageDeleteButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 0.8rem;

  width: 3.6rem;
  height: 3.6rem;
`;
