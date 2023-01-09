import React from 'react';

import Header from 'components/common/Header';
import Container from 'components/suggests/Container';
import BigButton from 'components/common/BigButton';

export default function invoice() {
  return (
    <>
      <Header title="운송장 입력하기" isHavingBackButton={true} />
      <Container />
    </>
  );
}
