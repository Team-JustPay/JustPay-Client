import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import CheckLogo from '../../public/assets/icons/check.svg';

interface ButtonProps {
  isChecked: boolean;
}

export default function CheckRadio() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClickCheckButton = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <CheckButton onClick={handleClickCheckButton} isChecked={isChecked}>
      <CheckLogo />
    </CheckButton>
  );
}

const CheckButton = styled.button<ButtonProps>`
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
    margin-left: -0.1rem;
  }
`;
