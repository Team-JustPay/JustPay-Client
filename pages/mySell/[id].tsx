import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';

import UserProfile from 'components/common/UserProfile';
import MySellInfoContainer from 'components/mySell/MySellInfoContainer';
import SuggestTab from 'components/matching/SuggestTab';
import MySellItemContainer from 'components/mySell/MySellItemContainer';
import GNB from 'components/common/GNB';
import PlusCircleButtonContainer from 'components/common/PlusCircleButtonContainer';

export default function mySell() {
  const [isClicked, setIsClicked] = useState(true);
  const [isGNBClicked, setIsGNBClicked] = useState(true);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
  };

  const handleGNBTab = () => {
    setIsGNBClicked((prev) => !prev);
  };

  return (
    <>
      {' '}
      <Root>
        <StyledHeader>
          <Logo />
        </StyledHeader>
        <UserProfile profileImage={'url'} userName={'유아 판매계'} userId={'@yoo_si_A'} />
        <MySellInfoContainer dealCount={10} saleMoney={145000} saleCount={5} />
        <StyledStickyContainer>
          <SuggestTab options={['판매 중', '판매 종료']} outerFunc={handleOptionTab} isClicked={isClicked} />
          <MySellItemContainer isSaled={false} />
          <MySellItemContainer isSaled={true} />
        </StyledStickyContainer>
      </Root>
      <PlusCircleButtonContainer />
      <GNB />
    </>
  );
}

const Root = styled.section`
  position: relative;
  margin-top: 6rem;
  padding-bottom: 10rem;
`;

const StyledHeader = styled.section`
  position: fixed;
  max-width: 43rem;
  top: 0;
  z-index: 10;

  width: 100%;
  padding: 1.95rem 0;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const StyledStickyContainer = styled.section``;
