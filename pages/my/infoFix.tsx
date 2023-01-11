import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Logo from '../../public/assets/icons/justpay_symbol_logo.svg';

import GNB from 'components/common/GNB';
import Router from 'next/router';
import MyInfoFixTab from 'components/myInfo/MyInfoFixTab';
import Modal from 'components/common/Modal';
import { useGetmyInfo } from 'apiHooks/user';
import { usePutmyInfo } from 'apiHooks/user';

export default function myInfoFix() {
  const { data: myInfo, error, isLoading } = useGetmyInfo(true);
  const [myfixedInfo, setMyfixedInfo] = useState(myInfo?.data.data);
  const [openModal, setOpenModal] = useState(false);

  const handleMoveToMyInfo = () => {
    console.log('최종 제출', myfixedInfo);
    if (
      myfixedInfo?.shippingInfo.receiverName !== '' &&
      myfixedInfo?.phoneNumber !== '' &&
      myfixedInfo?.shippingInfo.zipCode !== '' &&
      myfixedInfo?.shippingInfo.address !== '' &&
      myfixedInfo?.shippingInfo.detailAddress !== '' &&
      myfixedInfo?.depositorName !== '' &&
      myfixedInfo?.bankName !== '' &&
      myfixedInfo?.accountNumber !== ''
    ) {
      // alert('제출완료');
      // Router.push('/my/info');
      // usePutmyInfo(myfixedInfo);
    } else {
      setOpenModal(true);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setMyfixedInfo(myInfo?.data.data);
  }, [myInfo]);

  useEffect(() => {
    console.log('변경', myfixedInfo);
  }, [myfixedInfo]);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!myInfo) return null;

  return (
    <Root>
      {' '}
      <StyledHeader>
        <Logo />
        <p onClick={handleMoveToMyInfo}>완료</p>
      </StyledHeader>
      <MyInfoFixTab myfixedInfo={myInfo.data.data} setMyfixedInfo={setMyfixedInfo} />
      <GNB currentGNB="fix" />
      {openModal && (
        <Modal
          title={'필수 정보를 입력해 주세요!'}
          content={'필수 정보를 입력하지 않으면 저장할 수 없어요'}
          buttonSecondTitle={'확인'}
          buttonSecondFunction={handleOpenModal}
        />
      )}
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
