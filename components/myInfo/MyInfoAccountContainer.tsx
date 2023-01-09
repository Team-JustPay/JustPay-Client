import React from 'react';
import styled from 'styled-components';
import MyInfoItem from './MyInfoItem';

interface MyInfoAccountContainerProps {
  accountNumber: string;
}
export default function MyInfoAccountContainer({ accountNumber }: MyInfoAccountContainerProps) {
  return (
    <>
      <StyledMyInfoContainer>
        <h1>안전 결제 정보</h1>
        <StyledMyInfoItemConainer>
          <MyInfoItem title="입금자명" content="-" />
          <MyInfoItem title="은행명" content="-" />
          <MyInfoItem title="계좌번호" content={accountNumber} />
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
