import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import MyInfoInput from './MyInfoInput';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface MyInfoFixDeliveryContainerProps {
  myfixedInfo: any;
  setMyfixedInfo: Dispatch<SetStateAction<any>>;
}

export default function MyInfoFixDeliveryContainer({ myfixedInfo, setMyfixedInfo }: MyInfoFixDeliveryContainerProps) {
  const open = useDaumPostcodePopup();

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
    const zipcode = data.zonecode;
    let mainAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      if (extraAddress) {
        mainAddress += ` (${extraAddress})`;
      }
    }
    setMyfixedInfo((prev) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, zipCode: zipcode, address: mainAddress },
    }));
  };

  const handleShoppingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMyfixedInfo((prev) => ({
      ...prev,
      shippingInfo: { ...prev.shippingInfo, [name]: value },
    }));
  };

  const handlePhoneNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMyfixedInfo((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  return (
    <>
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
          onChangeFunc={handlePhoneNumberInput}
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
    </>
  );
}

const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title14pt};

  strong {
    color: ${({ theme }) => theme.colors.sub1};
  }
`;
