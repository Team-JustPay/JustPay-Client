import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import MyInfoInput from './MyInfoInput';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface MyInfoFixTabProps {
  myfixedInfo: any;
  setMyfixedInfo: Dispatch<SetStateAction<any>>;
}
interface OptionProps {
  isClicked: boolean;
}

interface StyledCurrentTabProps {
  isCurrentTab: boolean;
}

export default function MyInfoFixTab({ myfixedInfo, setMyfixedInfo }: MyInfoFixTabProps) {
  const [currentTab, setCurrentTab] = useState('delivery');
  const handleClickGNBOption = (e: React.MouseEvent) => {
    setCurrentTab(e.currentTarget.id);
  };

  const open = useDaumPostcodePopup();
  const [zipcode, setZipcode] = useState('');
  const [mainAddress, setMainAddress] = useState('');

  const onOpenAddress = (e: React.MouseEvent<HTMLDivElement>) => {
    e && e.preventDefault();
    open({
      onComplete: onCompleteAddress,
      defaultQuery: '',
      top: 0,
      left: 0,
    });
  };

  const onCompleteAddress = (data: Address) => {
    let address = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      if (extraAddress) {
        address += ` (${extraAddress})`;
      }
    }

    setMyfixedInfo((prev: { shippingInfo: object }) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, zipCode: data.zonecode, address: address },
    }));
    setZipcode(data.zonecode);
    setMainAddress(address);
  };

  const handleShoppingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMyfixedInfo((prev: { shippingInfo: object }) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, [name]: value },
    }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMyfixedInfo((prev: object) => ({
      ...prev,
      [name]: value,
    }));
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
      <StyledCurrentTab isCurrentTab={currentTab === 'delivery'}>
        <StyledMyInfoContainer>
          받는 사람 <strong>*</strong>{' '}
          <MyInfoInput
            name="receiverName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.receiverName}
            placehoderText="받는 사람 이름을 입력하세요"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          전화번호 <strong>*</strong>{' '}
          <MyInfoInput
            name="phoneNumber"
            onChangeFunc={handleInput}
            text={myfixedInfo?.phoneNumber}
            placehoderText="전화번호를 입력하세요 (- 제외)"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          집 주소 <strong>*</strong>
          <div onClick={onOpenAddress}>
            <MyInfoInput
              placehoderText="우편번호를 검색하세요"
              searchButton={true}
              value={myfixedInfo?.shippingInfo.zipCode}
            />
            <MyInfoInput placehoderText="주소를 검색하세요" value={myfixedInfo?.shippingInfo.address} />
          </div>
          <MyInfoInput
            name="detailAddress"
            onChangeFunc={handleShoppingInput}
            placehoderText="상세 주소를 입력하세요"
            text={myfixedInfo?.shippingInfo.detailAddress}
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          CU편의점 점포명
          <MyInfoInput
            name="cuStoreName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.cuStoreName}
            placehoderText="CU편의점 점포명을 입력하세요 (ex. 판교역점)"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          GS편의점 점포명
          <MyInfoInput
            name="gsStoreName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.gsStoreName}
            placehoderText="GS편의점 점포명을 입력하세요 (ex. 판교역점)"
          />
        </StyledMyInfoContainer>
      </StyledCurrentTab>
      <StyledCurrentTab isCurrentTab={currentTab === 'account'}>
        <StyledMyInfoContainer>
          입금자명 <strong>*</strong>
          <MyInfoInput
            name="depositorName"
            onChangeFunc={handleInput}
            text={myfixedInfo.depositorName}
            placehoderText="입금하는 사람 이름을 입력하세요"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          은행명 <strong>*</strong>
          <MyInfoInput
            name="bankName"
            onChangeFunc={handleInput}
            text={myfixedInfo.bankName}
            placehoderText="은행 이름을 입력하세요 (ex. 우리은행)"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          계좌번호 <strong>*</strong>
          <MyInfoInput
            name="accountNumber"
            onChangeFunc={handleInput}
            text={myfixedInfo.accountNumber}
            placehoderText="계좌번호를 입력하세요 (- 제외)"
          />
        </StyledMyInfoContainer>
      </StyledCurrentTab>
      <StyledCurrentTab isCurrentTab={currentTab === 'sns'}>
        <StyledMyInfoContainer>
          트위터 쪽지{' '}
          <MyInfoInput
            name="twitterMessageUrl"
            onChangeFunc={handleInput}
            text={myfixedInfo.twitterMessageUrl}
            placehoderText="트위터 URL을 입력하세요"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          카카오톡 오픈채팅{' '}
          <MyInfoInput
            name="openChatUrl"
            onChangeFunc={handleInput}
            text={myfixedInfo.openChatUrl}
            placehoderText="카카오톡 오픈채팅 URL을 입력하세요"
          />
        </StyledMyInfoContainer>
      </StyledCurrentTab>
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

const StyledCurrentTab = styled.section<StyledCurrentTabProps>`
  display: ${({ isCurrentTab }) => !isCurrentTab && 'none'};
`;

const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title14pt};

  strong {
    color: ${({ theme }) => theme.colors.sub1};
  }
`;
