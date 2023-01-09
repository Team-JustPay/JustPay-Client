import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
export default function improvedoffer() {
  return (
    <Root>
      <Header title={'가격올리기'} isHavingBackButton rightButtonText={'취소'} />
      <NewOfferText>가격을 올려서 새로 제시하세요</NewOfferText>
    </Root>
  );
}

const Root = styled.div``;

const NewOfferText = styled.p`
  ${({ theme }) => theme.fonts.title18pt};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1.8rem;
`;
