import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';
import Back from 'public/assets/icons/back.svg';

interface TitleBoxProps {
  title?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  isHavingBackButton?: boolean;
  handleLeftButton?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleRightButton?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({
  title,
  rightButtonText,
  isHavingBackButton,
  leftButtonText,
  handleLeftButton,
}: TitleBoxProps) {
  const handleRightButton = () => {
    if (rightButtonText === '취소') {
      Router.push('/my/sell');
    }
  };
  return (
    <Root>
      {isHavingBackButton ? (
        <StyledBackButtonWrapper type="button" onClick={handleLeftButton}>
          <Back />
        </StyledBackButtonWrapper>
      ) : (
        <StyledLeftButton type="button" onClick={handleLeftButton}>
          {leftButtonText}
        </StyledLeftButton>
      )}

      <StyledTitle>{title}</StyledTitle>
      <StyledRightButton type="button" onClick={handleRightButton}>
        {rightButtonText}
      </StyledRightButton>
    </Root>
  );
}

const Root = styled.div`
  position: relative;

  width: 100%;
  height: 5.7rem;
`;

const StyledBackButtonWrapper = styled.button`
  position: absolute;
  top: 1.9rem;

  width: 1rem;
  height: 2rem;
`;

const StyledLeftButton = styled.button`
  position: absolute;
  top: 1.9rem;

  ${theme.fonts.regular16pt};
  color: ${theme.colors.white};
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  ${theme.fonts.title16pt};
  color: ${theme.colors.white};
`;

const StyledRightButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 0rem;

  ${theme.fonts.regular16pt}
  color: ${theme.colors.white};
`;
