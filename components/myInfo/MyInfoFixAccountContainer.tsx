import React from 'react';
import styled from 'styled-components';
import MyInfoInput from './MyInfoInput';

interface MyInfoAccountContainerProps {
  accountNumber: string;
}
export default function MyInfoFixAccountContainer() {
  return (
    <>
      <StyledMyInfoContainer>
        입금자명 <strong>*</strong> <MyInfoInput placehoderText="입금하는 사람 이름을 입력하세요" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        은행명 <strong>*</strong> <MyInfoInput placehoderText="은행 이름을 입력하세요 (ex. 우리은행)" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        계좌번호 <strong>*</strong> <MyInfoInput placehoderText="계좌번호를 입력하세요 (- 제외)" />
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
