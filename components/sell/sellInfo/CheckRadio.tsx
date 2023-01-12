import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import CheckLogo from 'public/assets/icons/check.svg';

interface ButtonProps {
  isChecked: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CheckRadio({ isChecked, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <CheckButton isChecked={isChecked} onClick={handleClick}>
      <CheckLogo />
    </CheckButton>
  );
}

const CheckButton = styled.button<ButtonProps>`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

  border: 0.1rem solid;
  border-radius: 50%;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: ${({ theme }) => theme.colors.main};
          border-color: ${({ theme }) => theme.colors.main};
        `
      : css`
          background-color: transparent;
          border-color: ${({ theme }) => theme.colors.gray3};
        `}
  background-position: center;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
