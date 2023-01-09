import React from 'react';
import styled from 'styled-components';
import MyInfoItem from './MyInfoItem';

interface MyInfoContainerProps {
  receiverName: string;
  phoneNumber: string;
  address: string;
  cuStoreName: string;
  gsStoreName: string;
}
export default function MyInfoContainer({
  receiverName,
  phoneNumber,
  address,
  cuStoreName,
  gsStoreName,
}: MyInfoContainerProps) {
  return (
    <>
      <StyledMyInfoContainer>
        <h1>배송 정보</h1>
        <StyledMyInfoItemConainer>
          <MyInfoItem title="받는 사람" content={receiverName} />
          <MyInfoItem title="전화번호" content={phoneNumber} />
          <MyInfoItem title="집 주소" content={address} />
          <MyInfoItem title="CU 점포명" content={cuStoreName} />
          <MyInfoItem title="GS 점포명" content={gsStoreName} />
        </StyledMyInfoItemConainer>
      </StyledMyInfoContainer>
    </>
  );
}

const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt};
`;

const StyledMyInfoItemConainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 2rem;
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;

  & :last-child {
    margin-bottom: 0;
  }
`;
