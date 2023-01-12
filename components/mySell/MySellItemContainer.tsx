import React from 'react';
import styled from 'styled-components';
import MySellItem from './MySellItem';

interface MySellItemContainerProps {
  isSaled: boolean;
  itemList: any;
}
export default function MySellItemContainer({ isSaled, itemList }: MySellItemContainerProps) {
  return (
    <StyledMySellItemContainer>
      {itemList?.map((item: any) => (
        <MySellItem
          key={item.id}
          isSaled={isSaled}
          mainImageUrl={item.mainImageUrl}
          productCount={item.productCount}
          priceOption={item.priceOption}
          price={item.price}
        />
      ))}
    </StyledMySellItemContainer>
  );
}

const StyledMySellItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;

  width: 100%;
  margin-top: 2rem;
`;
