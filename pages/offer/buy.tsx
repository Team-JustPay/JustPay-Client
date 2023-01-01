import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';

export default function buy() {
  return (
    <Root>
      <Header title="다들 힘냅시다" rightButtonText="하이" isHavingBackButton={true} />
    </Root>
  );
}

const Root = styled.div`
  max-width: 43rem;

  margin: 0 auto;
`;
