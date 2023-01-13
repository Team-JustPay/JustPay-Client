import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';

interface MySellItemProps {
  id: number;
  isSaled?: boolean;
  mainImageUrl: string;
  productCount: number;
  salesOption?: string;
  priceOption: string;
  price?: number;
}

export default function MySellItem({
  id,
  isSaled,
  mainImageUrl,
  productCount,
  salesOption,
  priceOption,
  price,
}: MySellItemProps) {
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;

  const priceOptionContent = () => {
    if (priceOption === 'PRICE_OFFER') {
      return '제시 가격';
    } else {
      // priceOption === 'DESIGNATED_PRICE'
      if (productCount === 1) {
        return '지정 가격';
      } else {
        // productCount === 2
        if (salesOption === 'BULK') {
          return '지정 가격';
        } else {
          // salesOption === 'PARTIAL'
          return '지정 가격(일괄)';
        }
      }
    }
  };

  return (
    <StyledMySellItem
      saled={isSaled}
      onClick={() => {
        Router.push({
          pathname: `/sell/post/${id}`,
          query: { salesPostId: id },
        });
      }}>
      <img alt="판매글 대표 이미지" src={mainImageUrl} />
      <StyledItemListContainer>
        <StyledItemList>
          <h1>상품 개수</h1>
          <p>{productCount}개</p>
        </StyledItemList>
        <StyledItemList>
          <h1>가격 옵션</h1>
          <p>{priceOptionContent()}</p>
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
            <p>{price?.toString().replace(priceRegex, ',')}</p>
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
  width: calc((96% -12px) / 2);
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
