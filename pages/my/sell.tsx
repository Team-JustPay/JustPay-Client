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

export default function mySell() {
  const [isSaled, setIsSaled] = useState(false);
  const { data: myInfo } = useGetmyInfo(false);
  const { data: mySellInfo } = useGetMySellInfo(isSaled);

  console.log(myInfo);

  const userData = {
    profileImageUrl: 'url',
    nickname: '유아 판매계',
    socialId: '@yoo_si_A',
  };
  const sellData = {
    dealCount: 10,
    saleMoney: 145000,
    saleCount: 5,
  };

  const handleOptionTab = () => {
    setIsSaled((prev) => !prev);
  };

  return (
    <>
      {' '}
      <Root>
        <StyledHeader>
          <Logo />
        </StyledHeader>
        <UserProfile
          profileImageUrl={userData.profileImageUrl}
          nickname={userData.nickname}
          socialId={userData.socialId}
        />
        <MySellInfoContainer
          dealCount={myInfo?.data.data.dealCount}
          saleMoney={myInfo?.data.data.saleMoney}
          saleCount={myInfo?.data.data.saleCount}
        />
        <StyledStickyContainer>
          <SuggestTab options={['판매 중', '판매 종료']} outerFunc={handleOptionTab} isClicked={!isSaled} />
          <MySellItemContainer isSaled={isSaled} itemList={mySellInfo} />
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
