import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { useGetSuggestsInfo } from 'apiHooks/suggests';
import { useDeleteSuggests } from 'apiHooks/suggests';

import Header from 'components/common/Header';
import { TITLE } from 'constants/headerMessage';
import UserProfile from 'components/common/UserProfile';
import BigButton from 'components/offer/post/BigButton';
import LeftSmallButton from 'components/offer/post/LeftSmallButton';
import RightSmallButton from 'components/offer/post/RightSmallButton';
import SaleInfoContainer from 'components/common/SaleInfoContainer';
import Modal from 'components/common/Modal';

export default function suggest() {
  const router = useRouter();
  const { suggestId } = router.query;
  const { data: suggestsInfo } = useGetSuggestsInfo(Number(suggestId));
  const { mutate: handleClickCancelButton } = useDeleteSuggests(Number(suggestId));
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleClickRaisePriceButton = () => {
    Router.push({
      pathname: `/offer/betteroffer/${suggestsInfo?.data.data.salesPost.id}`,
      query: { suggestId: suggestsInfo?.data.data.id, salesPostId: suggestsInfo?.data.data.salesPost.id },
    });
  };

  return (
    <Root>
      <Header isHavingBackButton title={TITLE.VIEWOFFER} handleLeftButton={() => Router.back()} />
      <UserProfile
        profileImageUrl={suggestsInfo?.data.data.suggester.profileImageUrl}
        nickname={suggestsInfo?.data.data.suggester.nickName}
        socialId={suggestsInfo?.data.data.suggester.socialId}
      />
      <StyledPriceContainer>
        <StyledPriceTitle>
          {suggestsInfo?.data.data.salesPost.priceOption === 'PRICE_OFFER' ? '제시 가격' : '구매 가격'}
        </StyledPriceTitle>
        <StyledPrice>{suggestsInfo?.data.data.price.toLocaleString('ko-KR')} 원</StyledPrice>
      </StyledPriceContainer>
      <SaleInfoContainer
        productCount={suggestsInfo?.data.data.productCount}
        salesOption={suggestsInfo?.data.data.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
        priceOption={suggestsInfo?.data.data.shippingOption}
      />

      <StyledImgWrapper>
        <Image layout="fill" src={suggestsInfo?.data.data.imageUrl} alt="구매 제시 사진" />
      </StyledImgWrapper>
      {suggestsInfo?.data.data.salesPost.priceOption === 'PRICE_OFFER' && suggestsInfo.data.data.isMine && (
        <StyledButtonWrapper>
          <LeftSmallButton
            text="제시 취소하기"
            isClicked={false}
            onClick={() => setIsCancelModalOpen((prev) => !prev)}
          />
          <RightSmallButton text="가격 올리기" isClicked={false} onClick={handleClickRaisePriceButton} />
        </StyledButtonWrapper>
      )}

      {suggestsInfo?.data.data.salesPost.priceOption === 'DESIGNATED_PRICE' && suggestsInfo.data.data.isMine && (
        <BigButton text="제시 취소하기" isDisabled={false}></BigButton>
      )}

      {!suggestsInfo?.data.data.isMine && (
        <StyledButtonWrapper>
          <LeftSmallButton
            text="제시 거절하기"
            isClicked={false}
            onClick={() => {
              Router.push({
                pathname: `/sell/post/denyoffer/${suggestsInfo?.data.data.id}`,
                query: { id: suggestsInfo?.data.data.id },
              });
            }}
          />
          <RightSmallButton
            text="제시 수락하기"
            isClicked={false}
            onClick={() =>
              Router.push({
                pathname: `/sell/post/acceptoffer/${suggestsInfo?.data.data.id}`,
                query: { id: suggestsInfo?.data.data.id },
              })
            }
          />
        </StyledButtonWrapper>
      )}
      {isCancelModalOpen && (
        <Modal
          title="정말 취소하시겠습니까?"
          content="이전 화면에서 가격을 올릴 수 있어요<br/>나머지 옵션을 수정하고싶다면 취소해주세요"
          buttonFirstTitle="닫기"
          buttonSecondTitle="취소하기"
          buttonFirstFunction={() => setIsCancelModalOpen((prev) => !prev)}
          buttonSecondFunction={() => {
            handleClickCancelButton();
            Router.push({
              pathname: `/sell/post/denyoffer/${suggestsInfo?.data.data.id}`,
              query: { id: suggestsInfo?.data.data.id },
            });
          }}
        />
      )}
    </Root>
  );
}

const Root = styled.div``;
const StyledPriceContainer = styled.section`
  ${({ theme }) => theme.fonts.title20pt}
`;

const StyledPriceTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 0.8rem;
`;
const StyledPrice = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
const StyledImgWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_popup};
  height: 24.2rem;
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.2rem;
  width: calc(100% - 3.2rem);
  max-width: 43rem;
  padding: 1.2rem 0;

  position: fixed;
  bottom: 0;
`;
