import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import MyInfoInput from './MyInfoInput';

interface MyInfoAccountContainerProps {
  myfixedInfo: any;
  setMyfixedInfo: Dispatch<SetStateAction<any>>;
}

export default function MyInfoFixAccountContainer({ myfixedInfo, setMyfixedInfo }: MyInfoAccountContainerProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMyfixedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
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
