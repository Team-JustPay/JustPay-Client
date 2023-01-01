import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BigButton({ text, isDisabled, onClick }: ButtonProps) {
  return (
    <GlobalStyledButton onClick={onClick} disabled={isDisabled}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button`
  width: 100%;
  padding: 1.5rem 0 1.4rem;

  border: none;
  border-radius: 0.8rem;
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${({ theme }) => theme.colors.gray0};
          color: ${({ theme }) => theme.colors.gray2};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.main};
          color: ${({ theme }) => theme.colors.white};
        `}
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
