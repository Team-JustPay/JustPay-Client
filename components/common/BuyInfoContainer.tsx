import React from 'react';
import styled from 'styled-components';

interface BuyInfoContainerProps {
  BuyCount: number;
  BuysOption?: string;
  DeliveryOption: string;
}
export default function BuyInfoContainer({ BuyCount, BuysOption, DeliveryOption }: BuyInfoContainerProps) {
  return (
    <StyledBuyOptionContainer>
      <BuyInfo BuyCount={BuyCount}>
        <h1>구매 개수</h1>
        <p>{BuyCount}</p>
      </BuyInfo>
      {BuyCount !== 1 && (
        <BuyInfo BuyCount={BuyCount}>
          <h1>구매 유형</h1>
          <p>{BuysOption}</p>
        </BuyInfo>
      )}
      <BuyInfo BuyCount={BuyCount}>
        <h1>배송 옵션</h1>
        <p>{DeliveryOption}</p>
      </BuyInfo>
    </StyledBuyOptionContainer>
  );
}

const StyledBuyOptionContainer = styled.section`
  display: flex;

  width: 100%;
  height: 6.4rem;
  padding: 1.2rem;
  margin-top: 0.8rem;
  /* margin-bottom: 100px; */

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};

  & :last-child {
    border: none;
  }
`;

const BuyInfo = styled.section<{ BuyCount: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);
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
