import React, { useState } from 'react';
import styled from 'styled-components';

import ImageDownloadIcon from 'public/assets/icons/imageDownloadIcon.svg';
import ShareTwitterIcon from 'public/assets/icons/shareTwitterIcon.svg';

import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import ToastMessage from 'components/common/ToastMessage';
import SaleOption from 'components/sell/post/SaleOption';
import layout from '../layout';
export default function post() {
  const [isMine, setIsMine] = useState<boolean>(true);
  const [openImageDownloadModal, setOpenImageDownloadModal] = useState<boolean>(false);
  const [openCopyLinkModal, setOpenCopyLinkModal] = useState<boolean>(false);

  const handleImageDownload = () => {
    setOpenImageDownloadModal(true);
    setTimeout(() => {
      setOpenImageDownloadModal(false);
    }, 2000);
  };

  const handleCopyLink = () => {
    setOpenCopyLinkModal(true);
    setTimeout(() => {
      setOpenCopyLinkModal(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <Header title="판매글 상세" leftButtonText="제시 현황" rightButtonText="인증 사진"></Header>
        <StyledProfileContainer>
          <img></img>
          <StyledProfileAccount>
            <h1>거래</h1>
            <p>@wooyoung</p>
          </StyledProfileAccount>
        </StyledProfileContainer>
        <StyledSalePost>안녕하세요</StyledSalePost>
        <StyledSaleOptionContainer>
          <SaleOption optionName={'판매 개수'} optionTitle={24}></SaleOption>
          <SaleOption optionName={'판매 유형'} optionTitle={'일괄 구매만'}></SaleOption>
          <SaleOption optionName={'가격 옵션'} optionTitle={'제시가격'}></SaleOption>
        </StyledSaleOptionContainer>
        <StyledImageContainer>
          <img alt="판매글 대표 이미지" />
          <StyledImageDownloadButton type="button" onClick={handleImageDownload}>
            <ImageDownloadIcon />
          </StyledImageDownloadButton>
        </StyledImageContainer>
        <StyledExportConatiner>
          <StyledPostDate>2022.12.22 (목) 판매등록</StyledPostDate>
          {isMine && (
            <NonStyledShareTwitterButton type="button">
              <ShareTwitterIcon onClick={handleCopyLink} />
            </NonStyledShareTwitterButton>
          )}
        </StyledExportConatiner>
      </div>
      <StyledButtomConatiner>
        {openImageDownloadModal && <ToastMessage text="대표사진을 다운로드했어요" />}
        {openCopyLinkModal && <ToastMessage text="클립보드에 복사되었어요" />}
        <BigButton text="구매 제시 현황보기" isDisabled={false} onClick={() => {}} />
      </StyledButtomConatiner>
    </>
  );
}

post.Layout = layout;

const StyledProfileContainer = styled.section`
  display: flex;
  align-items: center;

  margin-top: 1.8rem;
  margin-bottom: 2rem;
  img {
    margin-right: 0.8rem;
    width: 4.2rem;
    height: 4.2rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const StyledProfileAccount = styled.section`
  h1 {
    ${({ theme }) => theme.fonts.medium14pt};

    color: ${({ theme }) => theme.colors.gray3};
  }
  p {
    ${({ theme }) => theme.fonts.regular14pt};
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

const StyledSalePost = styled.span`
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.regular16pt};
  line-height: 2.4rem;
`;

const StyledSaleOptionContainer = styled.section`
  display: flex;
  width: 100%;
  height: 6.4rem;

  margin-top: 2rem;
  margin-bottom: 1.2rem;
  padding: 1.2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;

  & :last-child {
    border: none;
  }
`;

const StyledImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  height: 24.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};

  text-align: center;
`;

const StyledImageDownloadButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledExportConatiner = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;
`;

const StyledPostDate = styled.article`
  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.regular12pt};
`;

const NonStyledShareTwitterButton = styled.button``;

const StyledButtomConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
