import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  selectedButton: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SmallButton({ text, selectedButton, onClick }: ButtonProps) {
  const [isPicked, setIsPicked] = useState(false);

  const handleClick = () => {
    onClick();

    if (isPicked === false) {
      setIsPicked(!isPicked);
    }
  };

  return (
    <GlobalStyledButton isPicked={isPicked} text={text} selectedButton={selectedButton} onClick={handleClick}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button<{ isPicked: boolean; selectedButton: string; text: string }>`
  width: calc(50% - 0.6rem);

  ${({ isPicked, text, selectedButton }) =>
    isPicked && text === selectedButton
      ? css`
          border: 0.2rem solid;
          border-color: ${({ theme }) => theme.colors.main};
          background-color: ${({ theme }) => theme.colors.main_opacity20};
          color: ${({ theme }) => theme.colors.main};
          padding: 1.4rem 0 1.3rem;
        `
      : css`
          border: 0.1rem solid;
          border-color: ${({ theme }) => theme.colors.gray3};
          background-color: ${({ theme }) => theme.colors.gray_background};
          color: ${({ theme }) => theme.colors.white};
          padding: 1.4rem 0 1.3rem;
        `}

  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
