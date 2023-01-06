import React from 'react';
import styled from 'styled-components';

interface PriceInfo {
  highestPrice: number;
}

export default function PriceInfo({ highestPrice }: PriceInfo) {
  return (
    <PriceInfoText>
      현재 최고가<strong>{highestPrice}원</strong>
    </PriceInfoText>
  );
}

const PriceInfoText = styled.p`
  padding: 2rem 0 1.6rem;

  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  strong {
    color: ${({ theme }) => theme.colors.sub1};
    padding-left: 0.8rem;
  }
`;
