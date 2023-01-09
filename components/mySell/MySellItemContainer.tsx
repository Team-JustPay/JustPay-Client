import React from 'react';
import styled from 'styled-components';
import MySellItem from './mySellItem';

interface MySellItemContainerProps {
  isSaled: boolean;
}
export default function MySellItemContainer({ isSaled }: MySellItemContainerProps) {
  const sellItemData = {
    mainImageUrl: '',
    productCount: 1,
    salesOption: 'BULK',
    priceOption: 'PRICE_OFFER',
    price: 16000,
  };
  return (
    <StyledMySellItemContainer>
      <MySellItem
        isSaled={isSaled}
        mainImageUrl={sellItemData.mainImageUrl}
        productCount={sellItemData.productCount}
        priceOption={sellItemData.priceOption}
        price={sellItemData.price}
      />
      <MySellItem isSaled={isSaled} mainImageUrl="" productCount={1} priceOption={'DESIGNATED_PRICE'} price={10000} />
      <MySellItem mainImageUrl="" productCount={2} salesOption={'BULK'} priceOption={'PRICE_OFFER'} price={10000} />
      <MySellItem mainImageUrl="" productCount={2} salesOption={'PARTIAL'} priceOption={'PRICE_OFFER'} price={10000} />
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
        salesOption={'PARTIAL'}
        priceOption={'DESIGNATED_PRICE'}
        price={10000}
      />
    </StyledMySellItemContainer>
  );
}

const StyledMySellItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;

  margin-top: 2rem;
`;
