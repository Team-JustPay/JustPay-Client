import React, { useState } from 'react';
import styled from 'styled-components';

import { useGetmyBuy, useGetmyInfo } from 'apiHooks/user';

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
  const [isClicked, setIsClicked] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);
  const { data: myInfo } = useGetmyInfo(true);
  const { data: myBuyPurchasedList } = useGetmyBuy(isPurchased);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
    setIsPurchased((prev) => !prev);
  };

  const handlePlustCircleButton = () => {
    Router.push('/sell/guide');
  };

  const handleClickSalesPostDetail = (id: string) => {
    Router.push({
      pathname: `/offer/post/${id}`,
      query: { suggestId: id },
    });
  };
  return (
    <>
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
          <SuggestTab options={['구매 제시 내역', '구매 확정']} outerFunc={handleOptionTab} isClicked={isClicked} />
        </StyledStickyContainer>
        <ItemContainer>
          {myBuyPurchasedList?.data.data.length === 0 ? (
            !isPurchased ? (
              <NoItem text="아직 구매 제시한 내역이 없어요" />
            ) : (
              <NoItem text="아직 구매 확정된 내역이 없어요" />
            )
          ) : (
            myBuyPurchasedList?.data.data.map((item: any) => (
              <SuggestItem
                itemSize={item.purchaseOption === 'BULK' ? 'small' : 'big'}
                description={item.description}
                status={item.status}
                key={item.id}
                element={item}
                imageUrl={item.imageUrl}
                onClick={() => handleClickSalesPostDetail(item.id)}
              />
            ))
          )}
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

const StyledStickyContainer = styled.section`
  position: sticky;
  top: 56px;
  z-index: 10;

  width: 100%;
  background-color: #292929;
`;
