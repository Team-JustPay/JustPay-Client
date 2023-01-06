import { listenerCount } from 'process';
import React from 'react';
import styled from 'styled-components';

interface SaleInfoContainerProps {
  productCount: number;
  salesOption?: string;
  priceOption: string;
}
export default function SaleInfoContainer({ productCount, salesOption, priceOption }: SaleInfoContainerProps) {
  return (
    <StyledSaleOptionContainer>
      <SaleInfo productCount={productCount}>
        <h1>판매 개수</h1>
        <p>{productCount}</p>
      </SaleInfo>
      {productCount !== 1 && (
        <SaleInfo productCount={productCount}>
          <h1>판매 유형</h1>
          <p>{salesOption}</p>
        </SaleInfo>
      )}
      <SaleInfo productCount={productCount}>
        <h1>가격 옵션</h1>
        <p>{priceOption}</p>
      </SaleInfo>
    </StyledSaleOptionContainer>
  );
}

const StyledSaleOptionContainer = styled.section`
  display: flex;

  width: 100%;
  height: 6.4rem;
  padding: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};

  & :last-child {
    border: none;
  }
`;

const SaleInfo = styled.section<{ productCount: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ productCount }) => `calc(100% / ${productCount})`};
  border-right: 1px solid ${({ theme }) => theme.colors.gray0};

  h1 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.regular12pt};
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.regular14pt};
  }
`;
