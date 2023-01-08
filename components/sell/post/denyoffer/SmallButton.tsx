import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  currentUserChoice: string;
}

interface StyledProps {
  isSelected: boolean;
  currentUserChoice: string;
  text: string;
}

export default function SmallButton({ text, onClick, currentUserChoice }: ButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    onClick();

    if (isSelected === false) {
      setIsSelected(!isSelected);
    }
  };

  return (
    <GlobalStyledButton text={text} isSelected={isSelected} onClick={handleClick} currentUserChoice={currentUserChoice}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button<StyledProps>`
  width: 100%;
  padding: 1.5rem 0 1.4rem;
  margin-bottom: 1.5rem;

  ${({ isSelected, text, currentUserChoice }) =>
    isSelected && text === currentUserChoice
      ? css`
          border: 0.2rem solid;
          border-color: ${({ theme }) => theme.colors.main};
          background-color: ${({ theme }) => theme.colors.main_opacity20};
          color: ${({ theme }) => theme.colors.main};
        `
      : css`
          border: 0.1rem solid;
          border-color: ${({ theme }) => theme.colors.gray3};
          background-color: ${({ theme }) => theme.colors.gray_background};
          color: ${({ theme }) => theme.colors.white};
        `}
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
