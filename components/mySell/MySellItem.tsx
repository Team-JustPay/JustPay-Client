import React from 'react';
import styled from 'styled-components';

interface MySellItemProps {
  isSaled?: boolean;
  mainImageUrl: string;
  productCount: number;
  salesOption?: string;
  priceOption: string;
  price?: number;
  highestPrice?: number;
}

export default function MySellItem({
  isSaled,
  mainImageUrl,
  productCount,
  salesOption,
  priceOption,
  price,
  highestPrice,
}: MySellItemProps) {
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  return (
    <StyledMySellItem saled={isSaled}>
      <img
        alt="판매글 대표 이미지"
        src="https://user-images.githubusercontent.com/62867581/211127784-8ece7c52-57dc-4468-8e66-cb2a12697f81.png"
      />
      <StyledItemListContainer>
        <StyledItemList>
          <h1>상품 개수</h1>
          <p>{productCount}개</p>
        </StyledItemList>
        <StyledItemList>
          <h1>가격 옵션</h1>
          {priceOption === 'PRICE_OFFER' ? (
            <p>제시 가격</p>
          ) : productCount === 2 ? (
            <p>지정 가격(일괄)</p>
          ) : (
            <p>지정 가격</p>
          )}
        </StyledItemList>
        {productCount === 2 && (
          <StyledItemList>
            <h1>판매 유형</h1>
            {salesOption === 'BULK' ? <p>일괄 판매만</p> : <p>일괄 또는 일부</p>}
          </StyledItemList>
        )}
        {isSaled ? (
          <StyledItemList>
            <h1></h1>
            <p>판매종료</p>
          </StyledItemList>
        ) : (
          <StyledItemList>
            {priceOption === 'PRICE_OFFER' ? <h1>현재 최고가</h1> : <h1>판매 가격</h1>}
            {priceOption === 'PRICE_OFFER' ? (
              <p>{highestPrice?.toString().replace(priceRegex, ',')}</p>
            ) : (
              <p>{price?.toString().replace(priceRegex, ',')}</p>
            )}
          </StyledItemList>
        )}
      </StyledItemListContainer>
    </StyledMySellItem>
  );
}

interface StyledMySellItemProps {
  saled: boolean | undefined;
}

const StyledMySellItem = styled.section<StyledMySellItemProps>`
  width: 17.3rem;
  height: 24.4rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};

  img {
    width: 100%;
    height: 12.7rem;

    border-radius: 0.8rem;
    opacity: ${({ saled }) => saled && 0.3};
  }
`;

const StyledItemListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 1.6rem 1.2rem 0 1.2rem;

  & article:last-child > p {
    color: ${({ theme }) => theme.colors.main};
  }
`;
const StyledItemList = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${({ theme }) => theme.colors.gray1};
    ${({ theme }) => theme.fonts.regular12pt};
  }
  p {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.regular12pt};
  }
`;
