import React, { useState } from 'react';
import styled from 'styled-components';

import { useGetSalesPostList, useGetSalesPostInfo } from 'apiHooks/salesPost';
import { useGetmyBuy } from 'apiHooks/user';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';
import UserProfile from 'components/common/UserProfile';
import MySellInfoContainer from 'components/mySell/MySellInfoContainer';
import SuggestTab from 'components/matching/SuggestTab';
import GNB from 'components/common/GNB';
import PlusCircleButtonContainer from 'components/common/PlusCircleButtonContainer';
import NoItem from 'components/myBuy/NoItem';
import SuggestItem from 'components/myBuy/SuggestItem';

import ItemContainer from 'components/matching/ItemContainer';
import Router from 'next/router';

export default function myBuy() {
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

  const [isClicked, setIsClicked] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);
  const { data: salesPostInfo } = useGetSalesPostInfo(2);
  const { data: myBuyPurchasedList } = useGetmyBuy(isPurchased);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
    setIsPurchased((prev) => !prev);
  };

  const handlePlustCircleButton = () => {
    Router.push('/sell/guide');
  };
  return (
    <>
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
          dealCount={sellData.dealCount}
          saleMoney={sellData.saleMoney}
          saleCount={sellData.saleCount}
        />
        <StyledStickyContainer>
          <SuggestTab options={['구매 제시 내역', '구매 확정']} outerFunc={handleOptionTab} isClicked={isClicked} />
        </StyledStickyContainer>
        <ItemContainer>
          {!salesPostInfo?.data.data.productCount && <NoItem />}
          {myBuyPurchasedList?.data.data.map((item: any) => (
            <SuggestItem
              itemSize={item.purchaseOption === 'BULK' ? 'small' : 'big'}
              description={item.description}
              status={item.status}
              key={item.id}
              element={item}
            />
          ))}
        </ItemContainer>
      </Root>
      <PlusCircleButtonContainer onClick={handlePlustCircleButton} />
      <GNB currentGNB={'buy'} />
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
