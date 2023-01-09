import React from 'react';
import styled from 'styled-components';
import { useGetSuggestsInfo } from 'apiHooks/suggests';
import { useRouter } from 'next/router';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import UserProfile from 'components/common/UserProfile';
import BigButton from 'components/offer/post/BigButton';
import LeftSmallButton from 'components/offer/post/LeftSmallButton';
import RightSmallButton from 'components/offer/post/RightSmallButton';
import SaleInfoContainer from 'components/common/SaleInfoContainer';

export default function suggest() {
  const { data: suggestsInfo } = useGetSuggestsInfo(2);

  return (
    <Root>
      <Header isHavingBackButton title={TITLE.VIEWOFFER}></Header>
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
        <img src={suggestsInfo?.data.data.imageUrl} alt="" />
      </StyledImgWrapper>
      {suggestsInfo?.data.data.salesPost.priceOption === 'PRICE_OFFER' && (
        <StyledButtonWrapper>
          <LeftSmallButton text="제시 취소하기" isClicked={false}></LeftSmallButton>
          <RightSmallButton text="가격 올리기" isClicked={false}></RightSmallButton>
        </StyledButtonWrapper>
      )}

      {suggestsInfo?.data.data.salesPost.priceOption === 'DESIGNATED_PRICE' && (
        <BigButton text="제시 취소하기" isDisabled={false}></BigButton>
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

  display: flex;
  justify-content: center;
  align-items: center;
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
