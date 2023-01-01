import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from 'styles/theme';
import Back from 'public/assets/icons/back.svg';

interface TitleBoxProps {
  title?: string;
  leftButton?: string;
  rightButton?: string;
}

export default function Header({ title, leftButton, rightButton }: TitleBoxProps) {
  return (
    <Root>
      <StyledBackButtonWrapper>
        <Back />
      </StyledBackButtonWrapper>
      <StyledTitle>{title}</StyledTitle>
      {rightButton && <StyledCancelButton>{rightButton}</StyledCancelButton>}
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  max-width: 43rem;

  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.7rem;

  ${theme.fonts.title16pt};
  color: ${theme.colors.white};
`;

const StyledCancelButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2.4rem;

  ${theme.fonts.regular16pt};
  color: ${theme.colors.white};
`;

const StyledBackButtonWrapper = styled.div`
  position: absolute;
  top: 1.9rem;
  left: 2.3rem;

  width: 1rem;
  height: 2rem;

  cursor: pointer;
`;
