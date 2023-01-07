import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import UserProfile from 'components/common/UserProfile';
import BigButton from 'components/offer/post/BigButton';
import LeftSmallButton from 'components/offer/post/LeftSmallButton';
import RightSmallButton from 'components/offer/post/RightSmallButton';
import SaleInfoContainer from 'components/common/SaleInfoContainer';

export default function suggest() {
  const data = {
    price: 10000,
    productCount: '1',
    salesPost: {
      priceOption: 'DESIGNATED_PRICE',
    },
  };
  return (
    <Root>
      <Header isHavingBackButton title={TITLE.VIEWOFFER}></Header>
      <UserProfile profileImage="gd" userName="정현욱" userId="@123123"></UserProfile>
      <StyledPriceContainer>
        <StyledPriceTitle>구매 가격</StyledPriceTitle>
        <StyledPrice>{data.price}</StyledPrice>
      </StyledPriceContainer>
      <SaleInfoContainer productCount={1} priceOption={data.productCount} />

      <StyledImgWrapper></StyledImgWrapper>
      {data.salesPost.priceOption === 'PRICE_OFFER' && (
        <StyledButtonWrapper>
          <LeftSmallButton text="dpqpqp" isClicked={false}></LeftSmallButton>
          <RightSmallButton text="dpqpqpqp" isClicked={false}></RightSmallButton>
        </StyledButtonWrapper>
      )}

      {data.salesPost.priceOption === 'DESIGNATED_PRICE' && (
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
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 43rem;
  margin: 0 -1.6rem;
  padding: 1.2rem 0;

  position: fixed;
  bottom: 0;
`;
