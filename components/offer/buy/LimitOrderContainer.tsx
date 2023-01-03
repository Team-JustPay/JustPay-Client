import React from 'react';
import styled from 'styled-components';
import UserInput from 'components/offer/buy/common/UserInput';
import MainText from 'components/common/MainText';
import theme from 'styles/theme';

export default function LimitOrderContainer() {
  return (
    <Root>
      <StyledImageWrapper />
      <StyledTextContainer>
        <MainText text="구매하는 가격을 확인하세요" />
      </StyledTextContainer>
      <StyledInputContainer>
        <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      </StyledInputContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24.2rem;
  margin: 1.8rem 0 4rem 0;

  background-color: ${theme.colors.black};
  border-radius: 0.8rem;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 4rem;
`;
