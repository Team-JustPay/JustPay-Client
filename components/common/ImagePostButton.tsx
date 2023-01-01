import React from 'react';
import styled, { css } from 'styled-components';

import BigPlusLogo from '../../public/assets/icons/plus=big.svg';
import SmallPlusLogo from '../../public/assets/icons/plus=small.svg';

interface ButtonProps {
  buttonSize: 'big' | 'small';
}

export default function ImagePostButton({ buttonSize }: ButtonProps) {
  return (
    <StyledButton buttonSize={buttonSize}>
      <ButtonContent>
        {buttonSize === 'big' ? <BigPlusLogo /> : <SmallPlusLogo />}
        <ButtonText>사진 등록하기</ButtonText>
      </ButtonContent>
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ buttonSize }) =>
    buttonSize === 'big'
      ? css`
          padding: 9.5rem 14rem;
          font-size: 1.4rem;
          line-height: 1.7rem;
        `
      : css`
          padding: 3.3rem 2.2rem;
          font-size: 1.2rem;
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
`;

const ButtonText = styled.p``;
