import React from 'react';
import styled, { css } from 'styled-components';

import BigPlusLogo from '../../public/assets/icons/plus=big.svg';
import SmallPlusLogo from '../../public/assets/icons/plus=small.svg';

interface ButtonProps {
  buttonSize: 'big' | 'small';
  htmlFor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImagePostButton({ buttonSize, htmlFor, onChange }: ButtonProps) {
  return (
    <StyledButton buttonSize={buttonSize} htmlFor={htmlFor}>
      <ButtonContent>
        {buttonSize === 'big' ? <BigPlusLogo /> : <SmallPlusLogo />}
        <ButtonText>사진 등록하기</ButtonText>
      </ButtonContent>
    </StyledButton>
  );
}

const StyledButton = styled.label<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24.2rem;

  ${({ buttonSize }) =>
    buttonSize === 'big'
      ? css`
          width: 100%;
          height: 24.2rem;
          ${({ theme }) => theme.fonts.regular14pt};
          line-height: 1.7rem;
        `
      : css`
          width: 11rem;
          height: 11rem;
          padding: 3.3rem 2.2rem;
          ${({ theme }) => theme.fonts.regular12pt};
          line-height: 1.4rem;
        `}
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};
  color: ${({ theme }) => theme.colors.white};
`;

const ButtonContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;

const ButtonText = styled.p``;
