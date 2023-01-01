import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import { TITLE, MENU } from 'constants/headerMessage';

export default function buy() {
  return (
    <Root>
      <Header title={TITLE.OFFER_TO_SELLER} rightButtonText={MENU.BACK} isHavingBackButton />
      <BigButton text="구매하기" isDisabled={false} onClick={() => {}} />
    </Root>
  );
}

const Root = styled.div`
  //TODO: 전역 스타일에 적용 예정이므로 최종 커밋시 제거
  max-width: 43rem;
  margin: 0 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;
