import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BigButton({ text, disabled, onClick }: ButtonProps) {
  return (
    <GlobalStyledButton onClick={onClick} disabled={disabled}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button`
  width: 100%;
  padding: 1.5rem 0 1.4rem;

  border: none;
  border-radius: 0.8rem;
  background-color: ${(props) =>
    props.disabled ? ({ theme }) => theme.colors.gray0 : ({ theme }) => theme.colors.main};
  color: ${(props) => (props.disabled ? ({ theme }) => theme.colors.gray2 : ({ theme }) => theme.colors.white)};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
