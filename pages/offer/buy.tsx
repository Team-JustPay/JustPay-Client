import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';

export default function buy() {
  return (
    <Root>
      <Header title="구매글 작성하기" rightButton="취소" />
    </Root>
  );
}

const Root = styled.div`
  max-width: 43rem;

  margin: 0 auto;
`;
