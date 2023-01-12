import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetMySellInfo, useGetmyInfo } from 'apiHooks/user';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';

import UserProfile from 'components/common/UserProfile';
import MySellInfoContainer from 'components/mySell/MySellInfoContainer';
import SuggestTab from 'components/matching/SuggestTab';
import MySellItemContainer from 'components/mySell/MySellItemContainer';
import GNB from 'components/common/GNB';
import PlusCircleButtonContainer from 'components/common/PlusCircleButtonContainer';

import Router from 'next/router';
export default function mySell() {
  const [isSaled, setIsSaled] = useState(false);
  const { data: myInfo } = useGetmyInfo(false);
  const { data: mySellInfo } = useGetMySellInfo(isSaled);

  const handleOptionTab = () => {
    setIsSaled((prev) => !prev);
  };

  const handlePlustCircleButton = () => {
    Router.push('/sell/guide');
  };

  return (
    <>
      {' '}
      <Root>
        <StyledHeader>
          <Logo />
        </StyledHeader>
        <UserProfile
          profileImageUrl={myInfo?.data.data.profileImageUrl}
          nickname={myInfo?.data.data.nickName}
          socialId={myInfo?.data.data.socialId}
        />
        <MySellInfoContainer
          dealCount={myInfo?.data.data.dealCount}
          saleMoney={myInfo?.data.data.saleMoney}
          saleCount={myInfo?.data.data.saleCount}
        />
        <StyledStickyContainer>
          <SuggestTab options={['판매 중', '판매 종료']} outerFunc={handleOptionTab} isClicked={!isSaled} />
        </StyledStickyContainer>
        <MySellItemContainer isSaled={isSaled} itemList={mySellInfo} />
      </Root>
      <PlusCircleButtonContainer onClick={handlePlustCircleButton} />
      <GNB currentGNB={'sell'} />
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

const StyledStickyContainer = styled.section`
  position: sticky;
  top: 56px;
  z-index: 10;

  width: 100%;
  background-color: #292929;
`;
