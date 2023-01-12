import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGetSalesPostInfo } from 'apiHooks/salesPost';

import ImageDownloadIcon from 'public/assets/icons/imageDownloadIcon.svg';
import ShareTwitterIcon from 'public/assets/icons/shareTwitterIcon.svg';

import UserProfile from 'components/common/UserProfile';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import ToastMessage from 'components/common/ToastMessage';
import SaleInfoContainer from 'components/common/SaleInfoContainer';
import layout from '../layout';
import Router from 'next/router';

export default function post() {
  const router = useRouter();
  const { id } = router.query;

  const { data: salesPostInfo } = useGetSalesPostInfo(Number(id));

  const [openImageDownloadModal, setOpenImageDownloadModal] = useState<boolean>(false);
  const [openCopyLinkModal, setOpenCopyLinkModal] = useState<boolean>(false);

  const handleImageDownload = () => {
    setOpenImageDownloadModal(true);
    setTimeout(() => {
      setOpenImageDownloadModal(false);
    }, 2000);
    return window.location.assign(salesPostInfo?.data.data.mainImageUr);
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
        <Header
          title="판매글 상세"
          leftButtonText="제시 현황"
          rightButtonText="인증 사진"
          handleLeftButton={() => {
            Router.push({
              pathname: `/matching/${salesPostInfo?.data.data.id}`,
              query: { salesPostId: salesPostInfo?.data.data.id },
            });
          }}
          handleRightButton={() => {
            Router.push({
              pathname: `/sell/post/${salesPostInfo?.data.data.id}/certifications`,
              query: { salesPostId: salesPostInfo?.data.data.id },
            });
          }}></Header>
        <UserProfile
          profileImageUrl={salesPostInfo?.data.data.sellor.profileImageUrl}
          nickname={salesPostInfo?.data.data.sellor.nickName}
          socialId={salesPostInfo?.data.data.sellor.socialId}
        />
        <StyledSalePost>{salesPostInfo?.data.data.description}</StyledSalePost>
        <SaleInfoContainer
          productCount={salesPostInfo?.data.data.productCount}
          salesOption={'일괄 또는 일부'}
          priceOption={'지정 가격'}
        />
        <StyledImageContainer>
          <ItemImage src={salesPostInfo?.data.data.mainImageUrl} alt="판매글 대표 이미지" />
          <StyledImageDownloadButton type="button" onClick={handleImageDownload}>
            <ImageDownloadIcon />
          </StyledImageDownloadButton>
        </StyledImageContainer>
        <StyledExportConatiner>
          <StyledPostDate>{salesPostInfo?.data.data.createdAt}</StyledPostDate>
          {salesPostInfo?.data.data.isMine && (
            <NonStyledShareTwitterButton type="button">
              <ShareTwitterIcon onClick={handleCopyLink} />
            </NonStyledShareTwitterButton>
          )}
        </StyledExportConatiner>
      </div>
      <StyledBottomConatiner>
        {openImageDownloadModal && <ToastMessage text="대표사진을 다운로드했어요" />}
        {openCopyLinkModal && <ToastMessage text="클립보드에 복사되었어요" />}
        {salesPostInfo?.data.data.isMine ? (
          <BigButton
            text="구매 제시 현황보기"
            isDisabled={false}
            onClick={() => {
              Router.push(`/matching/${salesPostInfo?.data.data.id}`);
            }}
          />
        ) : (
          <StyledBuyerButtonContainer>
            <StyledShowBuyerListButton type="button">구매 제시 현황보기</StyledShowBuyerListButton>
            <StyledBuySuggestButton type="button">구매 제시하기</StyledBuySuggestButton>
          </StyledBuyerButtonContainer>
        )}
      </StyledBottomConatiner>
    </>
  );
}

post.Layout = layout;

const StyledSalePost = styled.span`
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.regular16pt};
  line-height: 2.4rem;
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
  object-fit: fill;
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

const StyledBottomConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBuyerButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.gray_background};

  width: 100%;
  max-width: 43rem;

  padding: 0 1.6rem 1.2rem 1.6rem;

  button {
    width: 100%;
    padding: 1.45rem 0;
    border-radius: 0.8rem;

    ${({ theme }) => theme.fonts.title16pt};
  }
`;

const StyledShowBuyerListButton = styled.button`
  margin-right: 1.2rem;

  background: ${({ theme }) => theme.colors.main_opacity20};
  color: ${({ theme }) => theme.colors.main};
`;

const StyledBuySuggestButton = styled.button`
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}

const ItemImage = styled.img`
  object-fit: fill;
  height: 24.2rem;
  border-radius: 0.8rem;
`;
