import React, { useState } from 'react';
import styled from 'styled-components';
import AddressPopUp from './AddressPopUp';
import MyInfoInput from './MyInfoInput';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface MyInfoContainerProps {
  receiverName: string;
  phoneNumber: string;
  address: string;
  cuStoreName: string;
  gsStoreName: string;
}

export default function MyInfoFixDeliveryContainer() {
  const open = useDaumPostcodePopup();

  const [address, setAddress] = useState({ zipcode: '', main: '', detail: '' });

  const onOpenAddress = (e: React.MouseEvent<HTMLDivElement>) => {
    e && e.preventDefault();
    open({
      onComplete: onCompleteAddress,
      defaultQuery: address.main,
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

    setAddress({ ...address, zipcode, main: mainAddress });
  };

  return (
    <>
      <StyledMyInfoContainer>
        받는 사람 <strong>*</strong> <MyInfoInput placehoderText="받는 사람 이름을 입력하세요" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        전화번호 <strong>*</strong> <MyInfoInput placehoderText="전화번호를 입력하세요 (- 제외)" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        집 주소 <strong>*</strong>
        <div onClick={onOpenAddress}>
          <MyInfoInput placehoderText="우편번호를 검색하세요" searchButton={true} text={address.zipcode} />
          <MyInfoInput placehoderText="주소를 검색하세요" text={address.main} />
        </div>
        <MyInfoInput placehoderText="상세 주소를 입력하세요" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        CU편의점 점포명
        <MyInfoInput placehoderText="CU편의점 점포명을 입력하세요 (ex. 판교역점)" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        GS편의점 점포명
        <MyInfoInput placehoderText="GS편의점 점포명을 입력하세요 (ex. 판교역점)" />
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
