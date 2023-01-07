import React from 'react';
import styled from 'styled-components';

interface MySellItemProps {
  mainImageUrl: string;
  productCount: number;
  salesOption?: string;
  priceOption: number;
  price?: number;
  highestPrice?: number;
}

export default function MySellItem({
  mainImageUrl,
  productCount,
  salesOption,
  priceOption,
  price,
  highestPrice,
}: MySellItemProps) {
  return (
    <StyledMySellItem>
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
          <p>1개</p>
        </StyledItemList>
        <StyledItemList>
          <h1>상품 개수</h1>
          <p>1개</p>
        </StyledItemList>
      </StyledItemListContainer>
    </StyledMySellItem>
  );
}

const StyledMySellItem = styled.section`
  width: 17.3rem;
  height: 24.4rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};

  img {
    width: 100%;
    height: 12.7rem;

    border-radius: 0.8rem;
  }

  & :last-child {
    p {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

const StyledItemListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 6.2rem;
  margin: 1.6rem 1.2rem 3.9rem 1.2rem;
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
    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.regular12pt};
  }
`;
