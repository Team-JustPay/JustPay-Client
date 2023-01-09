import React from 'react';
import styled from 'styled-components';
import MyInfoDeliveryContainer from 'components/myInfo/MyInfoDeliveryContainer';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';
import MyInfoAccountContainer from 'components/myInfo/MyInfoAccountContainer';
import MyInfoSNSContainer from 'components/myInfo/MyInfoSNSContainer';

import { useGetmyInfo } from 'apiHooks/user';
import GNB from 'components/common/GNB';
import Router from 'next/router';
export default function myInfo() {
  const { data: myInfo } = useGetmyInfo();

  console.log(myInfo?.data.data);
  const handleMoveToMyInfoFix = () => {
    Router.push('/myInfo/1/fix');
  };
  return (
    <Root>
      <StyledHeader>
        <Logo />
        <p onClick={handleMoveToMyInfoFix}>수정</p>
      </StyledHeader>
      <MyInfoDeliveryContainer
        receiverName={myInfo?.data.data.shippingInfo.receiverName}
        phoneNumber={myInfo?.data.data.phoneNumber}
        address={myInfo?.data.data.shippingInfo.address}
        cuStoreName={myInfo?.data.data.shippingInfo.cuStoreName}
        gsStoreName={myInfo?.data.data.shippingInfo.gsStoreName}
      />
      <MyInfoAccountContainer accountNumber={myInfo?.data.data.accountNumber} />
      <MyInfoSNSContainer
        twitterMessageUrl={myInfo?.data.data.twitterMessageUrl}
        openChatUrl={myInfo?.data.data.openChatUrl}
      />
      <GNB />
    </Root>
  );
}

const Root = styled.section`
  & :last-child {
    margin-bottom: 0;
  }
`;

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
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.regular16pt};

  p {
    cursor: pointer;
  }
`;
