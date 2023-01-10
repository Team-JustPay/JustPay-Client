import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BigButton({ text, isDisabled, onClick }: ButtonProps) {
  return (
    <ButtonContainer>
      <GlobalStyledButton onClick={onClick} disabled={isDisabled}>
        {text}
      </GlobalStyledButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.article`
  width: 100%;
  max-width: 43rem;
  margin: 0 -1.6rem;
  padding: 1.2rem 0;

  position: fixed;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const GlobalStyledButton = styled.button`
  display: block;
  width: calc(100% - 3.2rem);
  margin: 0 auto;
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
          background-color: #2c4d43;
          color: #36ddab;
        `}
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
