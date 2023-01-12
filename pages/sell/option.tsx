import React, { useState, useCallback, useRef, useMemo } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
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
  const [isOptionClicked, setIsOptionClicked] = useState(false);
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
      setIsOptionClicked(false);
      setSalesPostState((prev) => ({ ...prev, salesOption: 'BULK' }));
    }
    setSalesPostState((prev) => ({ ...prev, productCount: Number((e.target as HTMLInputElement).value) }));
  };

  const optionHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      setIsOptionClicked(true);
      if (e.target.innerText === '일괄 판매만') {
        setSalesPostState((prev) => ({ ...prev, salesOption: 'BULK' }));
      }
      if (e.target.innerText === '일괄 + 일부') {
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

  return (
    <>
      <>
        <Header title="판매글 작성하기" isHavingBackButton={true} rightButtonText="취소" />
        <TitleText>
          <MainText text="판매글에 보일 대표 사진을 등록해주세요" />
          <SubText text="판매하는 상품이 전부 보이는 1장의 사진을 등록해주세요" isMainColor={false} />
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
            <MainText text="이 사진 중에서 몇 개를 파실 건가요?" />
            <InputContainer onChange={inputHandler}>
              <UserCountInput
                placeholder="정확한 상품의 개수를 입력해주세요"
                inputTextGuide="개"
                onChangeFunc={handleInput}
                inputText={inputText}
              />
            </InputContainer>
            {inputText !== '1' && inputText && (
              <OptionHandleContainer onClick={optionHandler}>
                <TwoOptionContainer
                  firstOption="일괄 판매만"
                  secondOption="일괄 + 일부"
                  firstOptionGuide="1명만 구매할 수 있어요"
                  secondOptionGuide="1명이 일괄 구매 하거나, 여러 명이 구매할 수 있어요"
                />
              </OptionHandleContainer>
            )}
          </OptionContainer>
        )}
      </>
      <BigButton text="다음" isDisabled={inputText !== '1' && !isOptionClicked} onClick={handleClickNextButton} />
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
