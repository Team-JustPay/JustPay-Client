import React from 'react';
import styled from 'styled-components';
import MyInfoInput from './MyInfoInput';
interface MyInfoSNSContainerProps {
  twitterMessageUrl: string;
  openChatUrl: string;
}
export default function MyInfoFixSNSContainer() {
  return (
    <>
      <StyledMyInfoContainer>
        트위터 쪽지 <MyInfoInput placehoderText="트위터 URL을 입력하세요" />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        카카오톡 오픈채팅 <MyInfoInput placehoderText="카카오톡 오픈채팅 URL을 입력하세요" />
      </StyledMyInfoContainer>
    </>
  );
}
const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title14pt};
`;
