import React, { useEffect, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';

import Alram from '../../public/assets/icons/alram.svg';
import AlramColor from '../../public/assets/icons/alram=color.svg';
import Buy from '../../public/assets/icons/buy.svg';
import BuyColor from '../../public/assets/icons/buy=color.svg';
import Sell from '../../public/assets/icons/sell.svg';
import SellColor from '../../public/assets/icons/sell=color.svg';
import MyInfo from '../../public/assets/icons/myInfo.svg';
import MyInfoColor from '../../public/assets/icons/myInfo=color.svg';
import Router from 'next/router';

interface GNBProps {
  currentGNB?: string;
}
export default function GNB({ currentGNB }: GNBProps) {
  const handleClickGNBOption = (e: React.MouseEvent) => {
    Router.push(`/my/${e.currentTarget.className}`);
  };

  return (
    <Root>
      <button type="button" className="alarm" onClick={handleClickGNBOption}>
        {currentGNB === 'alram' ? <AlramColor /> : <Alram />}
      </button>
      <button type="button" className="buy" onClick={handleClickGNBOption}>
        {currentGNB === 'buy' ? <BuyColor /> : <Buy />}
      </button>
      <button type="button" className="sell" onClick={handleClickGNBOption}>
        {currentGNB === 'sell' ? <SellColor /> : <Sell />}
      </button>
      <button type="button" className="info" onClick={handleClickGNBOption}>
        {currentGNB === 'info' ? <MyInfoColor /> : <MyInfo />}
      </button>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 43rem;
  height: 6.2rem;
  padding: 1.8rem 1.4rem;
  margin-left: -1.6rem;

  background: ${({ theme }) => theme.colors.grey_GNB};
  border-radius: 0.8rem 0.8rem 0px 0px;
`;
