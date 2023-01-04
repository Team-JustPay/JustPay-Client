import React from 'react';
import Router from 'next/router';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import styled from 'styled-components';
import layout from './layout';
import Header from 'components/common/Header';
import ImagePostButton from 'components/common/ImagePostButton';
export default function qcImageUpload() {
  const handleClickNextButton = () => {
    Router.push('/sell/selectPrice');
  };

  return (
    <>
      <div>
        <Header title="판매글 작성하기" isHavingBackButton={true} rightButtonText="취소" />
        <StyledCertigfyInfoConatiner>
          <MainText text="인증 전용 사진을 추가로 등록해주세요" />
          <SubText
            text="포스트잇에 계정 아이디와 인증단어를 적어주세요
  사진은 5장까지 등록할 수 있어요"
            isMainColor={false}
          />
        </StyledCertigfyInfoConatiner>
        <StyledCertigfyWordConatiner>
          <h1>인증단어</h1>
          <p>|</p>
          <strong>검은 토끼 1214</strong>
        </StyledCertigfyWordConatiner>
        <StyledUploadImageConatiner>
          <ImagePostButton buttonSize="small" />
          <StyledUploadImage></StyledUploadImage>
          <StyledUploadImage></StyledUploadImage>
          <StyledUploadImage></StyledUploadImage>
          <StyledUploadImage></StyledUploadImage>
        </StyledUploadImageConatiner>
      </div>
      <BigButton text="다음" isDisabled={false} onClick={handleClickNextButton} />
    </>
  );
}

qcImageUpload.Layout = layout;

const StyledCertigfyInfoConatiner = styled.section`
  margin-top: 2rem;
  & :first-child {
    margin-bottom: 0.8rem;
  }

  & :last-child {
    width: 27.5rem;
    margin-bottom: 1.6rem;
  }
`;
const StyledCertigfyWordConatiner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.fonts.medium14pt};
  h1 {
    margin-right: 0.8rem;
  }
  p {
    margin-right: 0.8rem;
  }
  strong {
    color: ${({ theme }) => theme.colors.sub1};
    ${({ theme }) => theme.fonts.title16pt};
  }
`;

const StyledUploadImageConatiner = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const StyledUploadImage = styled.article`
  width: 11rem;
  height: 11rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;
`;
