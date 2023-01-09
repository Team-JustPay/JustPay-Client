import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';

import GNB from 'components/common/GNB';
import Router from 'next/router';
import MyInfoFixTab from 'components/myInfo/MyInfoFixTab';
export default function myInfoFix() {
  const [isClicked, setIsClicked] = useState(true);
  const [isMatched, setIsMatched] = useState(false);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
  };

  const handleMoveToMyInfo = () => {
    Router.push('/myInfo/1');
  };

  return (
    <Root>
      {' '}
      <StyledHeader>
        <Logo />
        <p onClick={handleMoveToMyInfo}>완료</p>
      </StyledHeader>
      <MyInfoFixTab />
      <GNB />
    </Root>
  );
}

const Root = styled.section``;

const StyledHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 43rem;
  padding: 1.95rem 0.8rem 1.95rem 0rem;
  margin-bottom: 1.8rem;

  background-color: ${({ theme }) => theme.colors.gray_background};
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.title16pt};

  p {
    cursor: pointer;
  }
`;
