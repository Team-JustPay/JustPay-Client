import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SmallButton({ text, disabled, onClick }: ButtonProps) {
  return (
    <GlobalStyledButton disabled={disabled} onClick={onClick}>
      {text}
    </GlobalStyledButton>
  );
}

const GlobalStyledButton = styled.button`
  width: calc(50% - 0.6rem);
  padding: 1.5rem 0 1.4rem;

  border: ${(props) => (props.disabled ? '0.1rem solid' : '0.2rem solid')};
  border-color: ${(props) => (props.disabled ? ({ theme }) => theme.colors.gray3 : ({ theme }) => theme.colors.main)};
  border-radius: 0.8rem;
  background-color: ${(props) =>
    props.disabled ? ({ theme }) => theme.colors.gray0 : ({ theme }) => theme.colors.main_opacity20};
  color: ${(props) => (props.disabled ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.main)};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
