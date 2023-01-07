import React from 'react';
import MySellItem from 'components/mySell/MySellItem';
import styled from 'styled-components';
export default function MySellItemContainer() {
  return (
    <StyledMySellItemContainer>
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={2} salesOption={'BULK'} priceOption={0} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={0} salesOption={'BULK'} priceOption={0} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
      <MySellItem mainImageUrl="" productCount={1} priceOption={1} highestPrice={16000} />
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
