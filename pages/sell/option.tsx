import React, { useState, useCallback, useRef, useMemo } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { salesPostState } from '../../recoil/salespost';

import layout from './layout';
import Header from 'components/common/Header';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import ImagePostButton from 'components/common/ImagePostButton';
import TwoOptionContainer from 'components/common/TwoOptionContainer';
import BigButton from 'components/common/BigButton';
import UserCountInput from 'components/common/UserCountInput';
import CancelButton from 'public/assets/icons/imageUploadCancel.svg';

type UploadImage = {
  file: File | null;
  thumbnail: string;
  type: string;
};

export default function option() {
  const [isPosted, setIsPosted] = useState(true);
  const resetAllData = useResetRecoilState(salesPostState);
  const [inputText, setInputText] = useState('');
  const [salesPost, setSalesPostState] = useRecoilState(salesPostState);

  const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const inputHandler = (e: React.FormEvent) => {
    if ((e.target as HTMLInputElement).value === '1' || !(e.target as HTMLInputElement).value) {
      setSalesPostState((prev) => ({ ...prev, salesOption: 'BULK' }));
    }
    if ((e.target as HTMLInputElement).value !== '1') {
      setSalesPostState((prev) => ({ ...prev, salesOption: '' }));
    }
    setSalesPostState((prev) => ({ ...prev, productCount: Number((e.target as HTMLInputElement).value) }));
  };

  const optionHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.innerText === '?????? ?????????') {
        setSalesPostState((prev) => ({ ...prev, salesOption: 'BULK' }));
      }
      if (e.target.innerText === '?????? + ??????') {
        setSalesPostState((prev) => ({ ...prev, salesOption: 'BULK_PARTIAL' }));
      }
    }
  };

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

      setSalesPostState((prev) => ({ ...prev, mainImage: fileList[0] }));
    }
  };

  const handleDeleteImage = () => {
    if (imageFile !== null) {
      setImageFile(null);
      setSalesPostState((prev) => ({ ...prev, mainImage: null }));
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

  const handleClickNextButton = () => {
    Router.push('/sell/qcGuide');
  };

  const checkImageUpload = () => {
    return salesPost.mainImage === null ? false : true;
  };

  const checkProductCount = () => {
    return salesPost.productCount === null ? false : true;
  };

  const checkSalesOption = () => {
    return salesPost.salesOption === '' ? false : true;
  };

  const checkValidOption = () => {
    return checkImageUpload() && checkProductCount() && checkSalesOption() ? true : false;
  };

  const moveToPrevPage = () => {
    resetAllData();
    Router.push('/sell/guide');
  };

  return (
    <>
      <>
        <Header
          title="????????? ????????????"
          isHavingBackButton={true}
          rightButtonText="??????"
          handleLeftButton={moveToPrevPage}
        />
        <TitleText>
          <MainText text="???????????? ?????? ?????? ????????? ??????????????????" />
          <SubText text="???????????? ????????? ?????? ????????? 1?????? ????????? ??????????????????" isMainColor={false} />
        </TitleText>
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
        {isPosted && (
          <OptionContainer>
            <MainText text="??? ?????? ????????? ??? ?????? ?????? ??????????" />
            <InputContainer onChange={inputHandler}>
              <UserCountInput
                placeholder="????????? ????????? ????????? ??????????????????"
                inputTextGuide="???"
                onChangeFunc={handleInput}
                inputText={inputText}
              />
            </InputContainer>
            {inputText !== '1' && inputText && (
              <OptionHandleContainer onClick={optionHandler}>
                <TwoOptionContainer
                  firstOption="?????? ?????????"
                  secondOption="?????? + ??????"
                  firstOptionGuide="1?????? ????????? ??? ?????????"
                  secondOptionGuide="1?????? ?????? ?????? ?????????, ?????? ?????? ????????? ??? ?????????"
                />
              </OptionHandleContainer>
            )}
          </OptionContainer>
        )}
      </>
      <BigButton text="??????" isDisabled={!checkValidOption()} onClick={handleClickNextButton} />
    </>
  );
}

const OptionHandleContainer = styled.section`
  margin-bottom: 8rem;
`;

const OptionContainer = styled.section`
  margin-top: 4rem;
`;

const InputContainer = styled.section`
  margin: 2.4rem 0 1.2rem;
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

  width: 4.2rem;
  height: 4.2rem;
`;

const ImageUploadInput = styled.input``;

const StyledImagePostWrapper = styled.div`
  position: relative;

  margin-bottom: 2rem;
  width: 100%;
  height: 24.2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;
`;
