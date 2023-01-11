import React, { useState, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import MyInfoFixDeliveryContainer from './MyInfoFixDeliveryContainer';
import MyInfoFixAccountContainer from './MyInfoFixAccountContainer';
import MyInfoFixSNSContainer from './MyInfoFixSNSContainer';

import { useGetmyInfo } from 'apiHooks/user';
import { usePutmyInfo } from 'apiHooks/user';

import Router from 'next/';

interface MyInfoFixTabProps {
  myfixedInfo: any;
  setMyfixedInfo: Dispatch<SetStateAction<any>>;
}
interface OptionProps {
  isClicked: boolean;
}
export default function MyInfoFixTab({ myfixedInfo, setMyfixedInfo }: MyInfoFixTabProps) {
  const [currentTab, setCurrentTab] = useState('delivery');
  const handleClickGNBOption = (e: React.MouseEvent) => {
    setCurrentTab(e.currentTarget.id);
  };

  return (
    <>
      <TabContainer>
        <Option onClick={handleClickGNBOption} id="delivery" isClicked={currentTab === 'delivery' ? true : false}>
          배송 정보
        </Option>
        <Option onClick={handleClickGNBOption} id="account" isClicked={currentTab === 'account' ? true : false}>
          안전 결제 정보
        </Option>
        <Option onClick={handleClickGNBOption} id="sns" isClicked={currentTab === 'sns' ? true : false}>
          SNS 연락처
        </Option>
      </TabContainer>
      {currentTab === 'delivery' && (
        <MyInfoFixDeliveryContainer myfixedInfo={myfixedInfo} setMyfixedInfo={setMyfixedInfo} />
      )}
      {currentTab === 'account' && (
        <MyInfoFixAccountContainer myfixedInfo={myfixedInfo} setMyfixedInfo={setMyfixedInfo} />
      )}
      {currentTab === 'sns' && <MyInfoFixSNSContainer myfixedInfo={myfixedInfo} setMyfixedInfo={setMyfixedInfo} />}
    </>
  );
}

const TabContainer = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const Option = styled.div<OptionProps>`
  width: 50%;

  padding-bottom: 1.6rem;

  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: 700;

  text-align: center;
  cursor: pointer;

  ${({ isClicked }) =>
    isClicked
      ? css`
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 0.3rem solid ${({ theme }) => theme.colors.white};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray1};
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray0};
        `}
`;