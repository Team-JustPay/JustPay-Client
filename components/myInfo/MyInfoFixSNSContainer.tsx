import React from 'react';
import styled from 'styled-components';
import MyInfoItem from './MyInfoItem';

interface MyInfoSNSContainerProps {
  twitterMessageUrl: string;
  openChatUrl: string;
}
export default function MyInfoFixSNSContainer() {
  return (
    <>
      <StyledMyInfoContainer>
        <h1>SNS 연락처</h1>
        <StyledMyInfoItemConainer>SNS 수정</StyledMyInfoItemConainer>
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
