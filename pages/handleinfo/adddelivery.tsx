import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from 'components/common/Header';
import MyInfoInput from 'components/myInfo/MyInfoInput';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import BigButton from 'components/common/BigButton';
import { useRouter } from 'next/router';

import { useGetmyInfo, usePutmyInfo } from 'apiHooks/user';
import Router from 'next/router';

export default function adddelivery() {
  const { data: myInfo } = useGetmyInfo(true);
  const [myfixedInfo, setMyfixedInfo] = useState(myInfo?.data.data);
  const { mutate: handleHandInfo } = usePutmyInfo(myfixedInfo);

  const open = useDaumPostcodePopup();
  const [zipcode, setZipcode] = useState('');
  const [mainAddress, setMainAddress] = useState('');

  const phoneNumberRouter = useRouter();

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

  const moveToPrevPage = () => {
    Router.push('/handleinfo/addphonenumber');
  };

  useEffect(() => {
    setMyfixedInfo(myInfo?.data.data);
    setMyfixedInfo((prev: object) => ({
      ...prev,
      phoneNumber: phoneNumberRouter?.query?.phone,
    }));
  }, [myInfo]);

  const handleHandInfoButton = () => {
    handleHandInfo();
  };

  const checkValidation = () => {
    if (
      myfixedInfo?.shippingInfo.receiverName !== '' &&
      myfixedInfo?.shippingInfo.zipCode !== '' &&
      myfixedInfo?.shippingInfo.mainAddress !== '' &&
      myfixedInfo?.shippingInfo.detailAddress !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (myInfo === undefined) return null;
  return (
    <Root>
      {' '}
      <Header handleLeftButton={moveToPrevPage} isHavingBackButton title={'배송지 등록'} />
      <p>
        판매자가 구매제시를 수락하고 결제가 완료되면 <br /> 판매자가 확인할 배송지 정보에요
      </p>
      <StyledMyInfoContainer>
        <StlyedPhoneNumber>{phoneNumberRouter?.query?.phone}</StlyedPhoneNumber>
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        받는 사람
        <MyInfoInput
          name="receiverName"
          onChangeFunc={handleShoppingInput}
          placehoderText="받는 사람 이름을 입력하세요"
        />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        집 주소
        <div onClick={onOpenAddress}>
          <MyInfoInput
            placehoderText="우편번호를 검색하세요"
            searchButton={true}
            value={zipcode === '' ? myInfo.data.data.shippingInfo.zipCode : zipcode}
          />
          <MyInfoInput
            placehoderText="주소를 검색하세요"
            value={mainAddress === '' ? myInfo.data.data.shippingInfo.address : mainAddress}
          />
        </div>
        <MyInfoInput name="detailAddress" onChangeFunc={handleShoppingInput} placehoderText="상세 주소를 입력하세요" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        CU편의점 점포명 (선택)
        <MyInfoInput
          name="cuStoreName"
          onChangeFunc={handleShoppingInput}
          placehoderText="CU편의점 점포명을 입력하세요 (ex. 판교역점)"
        />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        GS편의점 점포명 (선택)
        <MyInfoInput
          name="gsStoreName"
          onChangeFunc={handleShoppingInput}
          placehoderText="GS편의점 점포명을 입력하세요 (ex. 판교역점)"
        />
      </StyledMyInfoContainer>
      <BigButton text={'완료'} isDisabled={!checkValidation()} onClick={handleHandInfoButton} />
    </Root>
  );
}

const Root = styled.section`
  p {
    margin-top: 2.9rem;
    margin-bottom: 1.2rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.regular14pt}
    line-height: 2rem;
  }
`;

const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt};
`;

const StlyedPhoneNumber = styled.article`
  height: 6rem;
  padding: 2.05rem 4.5rem 2.05rem 2rem;
  margin-top: 1.2rem;

  color: ${({ theme }) => theme.colors.gray1};
  background: rgba(74, 74, 74, 0.3);
  border: 1px solid ${({ theme }) => theme.colors.gray0};
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.title16pt};
`;
