import React, { useEffect, useState } from 'react';
import { salesPostState } from '../../recoil/salespost';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import layout from './layout';
import Router from 'next/router';
import { useSetSalesPost } from 'apiHooks/salesPost';
import { useRecoilState } from 'recoil';

interface TextLengthProps {
  currentTextLength: number;
}

export default function write() {
  const [salesPostInfo, setSalesPostState] = useRecoilState(salesPostState);
  const [imageUrl, setImageUrl] = useState('');

  const [currentTextLength, setCurrentTextLength] = useState(0);
  const [isEmptyTextArea, setIsEmptyTextArea] = useState(true);

  const formData = new FormData();

  formData.append('mainImage', salesPostInfo.mainImage);
  formData.append('productCount', salesPostInfo.productCount + '');
  formData.append('salesOption', salesPostInfo.salesOption);
  formData.append('priceOption', salesPostInfo.priceOption);
  formData.append('price', salesPostInfo.price + '');
  formData.append('certificationWord', salesPostInfo.certificationWord);
  formData.append('description', salesPostInfo.description);
  salesPostInfo.certifications.forEach((element) => {
    formData.append('certifications', element);
  });
  salesPostInfo.shippingOptions.forEach((element) => {
    formData.append('shippingOptions', element);
  });
  const { mutate: submitSalesForm } = useSetSalesPost(formData);

  const handlecurrentTextLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTextLength(e.target.value.length);
    setSalesPostState((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleClickPostWritingButton = () => {
    submitSalesForm();
  };

  const moveToPrevPage = () => {
    Router.push('/sell/checkUserInput');
  };

  useEffect(() => {
    const blob = new Blob([salesPostInfo.mainImage]);

    const image = URL.createObjectURL(blob);
    setImageUrl(image);
  }, []);

  useEffect(() => {
    currentTextLength !== 0 ? setIsEmptyTextArea(false) : setIsEmptyTextArea(true);
  }, [currentTextLength]);

  return (
    <Root>
      <Header
        title="????????? ????????????"
        isHavingBackButton={true}
        rightButtonText="??????"
        handleLeftButton={moveToPrevPage}
      />
      <StyledImagePopUpConatiner>
        <img src={imageUrl} alt="????????????" />
      </StyledImagePopUpConatiner>
      <StyledWriteContainer
        placeholder="???????????? ????????? ????????? ?????????????????? ????????? ????????? ?????? ????????? ????????? ??? ?????????"
        maxLength={500}
        onChange={handlecurrentTextLength}></StyledWriteContainer>
      <StyledTextLength currentTextLength={currentTextLength}>
        <strong>{currentTextLength}</strong>
        /500
      </StyledTextLength>
      <BigButton text="????????????" isDisabled={isEmptyTextArea} onClick={handleClickPostWritingButton} />
    </Root>
  );
}

const Root = styled.div`
  padding-bottom: 15rem;
`;

const StyledImagePopUpConatiner = styled.section`
  display: flex;
  align-items: center;

  height: 24.2rem;
  margin-top: 1.8rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_popup};

  & > img {
    width: 100%;
    height: 20.2rem;
  }
`;

const StyledWriteContainer = styled.textarea`
  width: 100%;
  height: 28rem;
  margin-top: 2rem;

  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray_background};
  ${({ theme }) => theme.fonts.regular16pt};
  line-height: 2.4rem;
`;

const StyledTextLength = styled.section<TextLengthProps>`
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.regular12pt};

  text-align: right;

  & > strong {
    color: ${({ currentTextLength }) =>
      currentTextLength === 0 ? ({ theme }) => theme.colors.gray3 : ({ theme }) => theme.colors.main};
  }
`;

write.Layout = layout;
