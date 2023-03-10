import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import MyInfoInput from './MyInfoInput';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import CallNumberInput from 'components/handleinfo/addphonenumber/CallNumberInput';

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
  const [phoneNumber, setPhoneNumber] = useState('');

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

    setZipcode(data.zonecode);
    setMainAddress(address);
    setMyfixedInfo((prev: { shippingInfo: object }) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, zipCode: data.zonecode, address: address },
    }));
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
    name === 'phoneNumber' && setPhoneNumber(value);
    setMyfixedInfo((prev: object) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <TabContainer>
        <Option onClick={handleClickGNBOption} id="delivery" isClicked={currentTab === 'delivery' ? true : false}>
          ?????? ??????
        </Option>
        <Option onClick={handleClickGNBOption} id="account" isClicked={currentTab === 'account' ? true : false}>
          ?????? ?????? ??????
        </Option>
        <Option onClick={handleClickGNBOption} id="sns" isClicked={currentTab === 'sns' ? true : false}>
          SNS ?????????
        </Option>
      </TabContainer>
      <StyledCurrentTab isCurrentTab={currentTab === 'delivery'}>
        <StyledMyInfoContainer>
          ?????? ?????? <strong>*</strong>{' '}
          <MyInfoInput
            name="receiverName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.receiverName}
            placehoderText="?????? ?????? ????????? ???????????????"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          ???????????? <strong>*</strong>{' '}
          <CallNumberInput
            name="phoneNumber"
            onChangeFunc={handleInput}
            text={myfixedInfo?.phoneNumber}
            placeholder="??????????????? ??????????????? (- ??????)"
            phoneNumber={phoneNumber}
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          ??? ?????? <strong>*</strong>
          <div onClick={onOpenAddress}>
            <MyInfoInput
              placehoderText="??????????????? ???????????????"
              searchButton={true}
              value={zipcode === '' ? myfixedInfo?.shippingInfo.zipCode : zipcode}
            />
            <MyInfoInput
              placehoderText="????????? ???????????????"
              value={mainAddress === '' ? myfixedInfo?.shippingInfo.address : mainAddress}
            />
          </div>
          <MyInfoInput
            name="detailAddress"
            onChangeFunc={handleShoppingInput}
            placehoderText="?????? ????????? ???????????????"
            text={myfixedInfo?.shippingInfo.detailAddress}
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          CU????????? ?????????
          <MyInfoInput
            name="cuStoreName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.cuStoreName}
            placehoderText="CU????????? ???????????? ??????????????? (ex. ????????????)"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          GS????????? ?????????
          <MyInfoInput
            name="gsStoreName"
            onChangeFunc={handleShoppingInput}
            text={myfixedInfo?.shippingInfo.gsStoreName}
            placehoderText="GS????????? ???????????? ??????????????? (ex. ????????????)"
          />
        </StyledMyInfoContainer>
      </StyledCurrentTab>
      <StyledCurrentTab isCurrentTab={currentTab === 'account'}>
        <StyledMyInfoContainer>
          ???????????? <strong>*</strong>
          <MyInfoInput
            name="depositorName"
            onChangeFunc={handleInput}
            text={myfixedInfo.depositorName}
            placehoderText="???????????? ?????? ????????? ???????????????"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          ????????? <strong>*</strong>
          <MyInfoInput
            name="bankName"
            onChangeFunc={handleInput}
            text={myfixedInfo.bankName}
            placehoderText="?????? ????????? ??????????????? (ex. ????????????)"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          ???????????? <strong>*</strong>
          <MyInfoInput
            name="accountNumber"
            onChangeFunc={handleInput}
            text={myfixedInfo.accountNumber}
            placehoderText="??????????????? ??????????????? (- ??????)"
          />
        </StyledMyInfoContainer>
      </StyledCurrentTab>
      <StyledCurrentTab isCurrentTab={currentTab === 'sns'}>
        <StyledMyInfoContainer>
          ????????? ??????{' '}
          <MyInfoInput
            name="twitterMessageUrl"
            onChangeFunc={handleInput}
            text={myfixedInfo.twitterMessageUrl}
            placehoderText="????????? URL??? ???????????????"
          />
        </StyledMyInfoContainer>
        <StyledMyInfoContainer>
          ???????????? ????????????{' '}
          <MyInfoInput
            name="openChatUrl"
            onChangeFunc={handleInput}
            text={myfixedInfo.openChatUrl}
            placehoderText="???????????? ???????????? URL??? ???????????????"
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
