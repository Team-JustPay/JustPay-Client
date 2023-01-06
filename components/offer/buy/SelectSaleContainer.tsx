import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import ImagePostButton from 'components/common/ImagePostButton';
import UserInput from 'components/offer/buy/common/UserDescriptionInput';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import SmallButton from 'components/offer/buy/common/SmallButton';
import UserCountInput from 'components/offer/buy/common/UserCountInput';
import UserOfferNumberInput from 'components/offer/buy/common/UserOfferNumberInput';
import { getLocalNumber } from 'utils/price';
import { useRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';

export default function SelectedSaleContainer({ isLimitOrder }: { isLimitOrder: boolean }) {
  const [offerData, setOfferData] = useRecoilState(buyoffer);
  const [selectedButton, setSelectedButton] = useState('미선택');
  const [inputNumber, setInputNumber] = useState('');
  const [inputCount, setInputCount] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  // TODO: 서버에서 받은 데이터가 최고가격의 상수로 들어갈 예정
  // TODO: 서버 데이터로 교체
  const limitOrderPrice = 100000;
  const maxCount = 20;
  const maximumPrice = 100000;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  let countOverCheck = maxCount < Number(inputCount);

  const ButtonName = Object.freeze({
    ALL: '일괄 구매',
    INDIVIDUAL: '일부 구매',
  });

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

  const CheckCorrectPrice = (number: number) => {
    if (number > maximumPrice && number % 500 === 0) {
      return true;
    }
    return false;
  };

  const CheckCorrectCount = (number: number) => {
    return maxCount >= number ? true : false;
  };

  const handleNumberInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '').replace(/,/g, '');
    setInputNumber(value);
    if (inputNumber !== value && CheckCorrectPrice(Number(value))) {
      setOfferData((prev) => ({ ...prev, price: Number(value) }));
    }
  }, []);

  const handleCountInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    setInputCount(value);
    if (inputCount !== value && CheckCorrectCount(Number(value))) {
      setOfferData((prev) => ({ ...prev, productCount: Number(value) }));
    }
  }, []);

  const handleDescriptionInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value);
    if (inputDescription !== e.target.value) {
      setOfferData((prev) => ({ ...prev, description: e.target.value }));
    }
  }, []);

  console.log(offerData);
  return (
    <Root>
      <StyledTitleContainer>
        <MainText text="구매 희망 상품을 표시한 사진을 등록해주세요" />
        <SubText text="일괄 구매하는 경우에는 표시하지 않아도 돼요" />
      </StyledTitleContainer>
      <StyledImagePostWrapper>
        <ImagePostButton buttonSize="big" />
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
              <MainText text="구매 희망 상품의 개수를 입력하세요"></MainText>
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
              <SubText text="표시한 포카 4장 구매원함, 마크 셀포 브이 1장 구매," />
              <SubText text="핑크색머리 천러 중복 3장 등 이해하기 쉽게 설명해주세요" />
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
  margin-bottom: 2rem;
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
