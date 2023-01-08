import React from 'react';
import styled from 'styled-components';
import MySellItem from './mySellItem';

interface MySellItemContainerProps {
  isSaled: boolean;
}
export default function MySellItemContainer({ isSaled }: MySellItemContainerProps) {
  return (
    <StyledMySellItemContainer>
      <MySellItem isSaled={isSaled} mainImageUrl="" productCount={1} priceOption={'PRICE_OFFER'} highestPrice={16000} />
      <MySellItem isSaled={isSaled} mainImageUrl="" productCount={1} priceOption={'DESIGNATED_PRICE'} price={10000} />
      <MySellItem
        mainImageUrl=""
        productCount={2}
        salesOption={'BULK'}
        priceOption={'DESIGNATED_PRICE'}
        price={10000}
      />
      <MySellItem
        mainImageUrl=""
        productCount={2}
        salesOption={'BULK_PARTIAL'}
        priceOption={'DESIGNATED_PRICE'}
        price={10000}
      />
      <MySellItem
        mainImageUrl=""
        productCount={2}
        salesOption={'BULK'}
        priceOption={'PRICE_OFFER'}
        highestPrice={10000}
      />
      <MySellItem
        mainImageUrl=""
        productCount={2}
        salesOption={'BULK_PARTIAL'}
        priceOption={'PRICE_OFFER'}
        highestPrice={10000}
      />
    </StyledMySellItemContainer>
  );
}

const StyledMySellItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;

  margin-top: 2rem;
`;
