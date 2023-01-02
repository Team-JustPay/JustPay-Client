import React from 'react';
import styled, { css } from 'styled-components';

interface DeliveryOptionProps {
  isSelected: boolean;
}

export default function DeliveryOption({ isSelected }: DeliveryOptionProps) {
  return (
    <Root isSelected={isSelected}>
      <StyledStyledContainer>
        <StyledOptionTitle>우체국택배</StyledOptionTitle>
        <StyledSubtitle>| 1,600원</StyledSubtitle>
      </StyledStyledContainer>
    </Root>
  );
}

const Root = styled.div<{ isSelected: boolean }>`
  width: calc(50% - 0.6rem);
  height: 12.2rem;
  border-radius: 0.8rem;
  padding: 1.6rem;

  ${({ isSelected }) =>
    isSelected
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
        `}
`;

const StyledStyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledOptionTitle = styled.p`
  ${({ theme }) => theme.fonts.title16pt};
  color: ${({ theme }) => theme.colors.white};

  margin-right: 0.5rem;
`;

const StyledSubtitle = styled.p`
  ${({ theme }) => theme.fonts.title14pt};
  color: ${({ theme }) => theme.colors.gray3};
`;
