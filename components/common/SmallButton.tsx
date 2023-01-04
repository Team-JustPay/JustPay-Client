import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  isClicked: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface StyledProps {
  isClicked: boolean;
}

export default function SmallButton({ text, isClicked, onClick }: ButtonProps) {
  return (
    <GlobalStyledButton isClicked={isClicked} onClick={onClick}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button<StyledProps>`
  width: calc(50% - 0.6rem);
  padding: 1.5rem 0 1.4rem;

  ${({ isClicked }) =>
    !isClicked
      ? css`
          border: 0.1rem solid;
          border-color: ${({ theme }) => theme.colors.gray3};
          background-color: ${({ theme }) => theme.colors.gray_background};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          border: 0.2rem solid;
          border-color: ${({ theme }) => theme.colors.main};
          background-color: ${({ theme }) => theme.colors.main_opacity20};
          color: ${({ theme }) => theme.colors.main};
        `}
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
