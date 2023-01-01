import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';

export default function buy() {
  return (
    <Root>
      <Header title={TITLE.OFFER_TO_SELLER} rightButtonText={MENU.BACK} isHavingBackButton />
    </Root>
  );
}

const Root = styled.div`
  max-width: 43rem;
  margin: 0 auto;
`;
