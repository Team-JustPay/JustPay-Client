import GNB from 'components/common/GNB';
import styled from 'styled-components';
import MainLogo from 'public/assets/icons/justpay_symbol_logo.svg';
import BuyIcon from 'public/assets/icons/notification_buy.svg';
import SellIcon from 'public/assets/icons/notification_sell.svg';
import React from 'react';
import { useGetAlarm } from 'apiHooks/user';

export default function alram() {
  const { data: myAlarm } = useGetAlarm();

  console.log(myAlarm);
  const data = [
    {
      notificationType: '판매 알림',
      message: '이런저런 메시지',
      create: '2022.12.20 15:40',
    },
  ];

  return (
    <Root>
      <LogoWrapper>
        <MainLogo />
      </LogoWrapper>
      <TradeAlramText>중요한 거래 알림을 확인하세요!</TradeAlramText>

      {myAlarm?.data.data.map((item: { notificationType: string; createdAt: string; message: string }) => (
        <Notificontent>
          <NotificationHeader>
            <NotificationText>
              {item.notificationType === '구매 알림' ? <BuyIcon /> : <SellIcon />}
              {item.notificationType}
            </NotificationText>
            <NotificationRight>{item.createdAt}</NotificationRight>
          </NotificationHeader>
          <NotificationMessage>{item.message}</NotificationMessage>
        </Notificontent>
      ))}

      <GNB currentGNB={'alarm'} />
    </Root>
  );
}
const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  height: 5.7rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TradeAlramText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title20pt}
  margin-bottom: 2.0rem;
`;

const Notificontent = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(28, 28, 28, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.1rem;
`;
const NotificationText = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NotificationRight = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray1};
`;

const NotificationMessage = styled.div`
  width: 100%;
  ${({ theme }) => theme.fonts.regular14pt}
  color: ${({ theme }) => theme.colors.gray4};
  line-height: 2.2rem;
`;
