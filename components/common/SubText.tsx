import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface SubTextProps {
  text: string;
  isMainColor: boolean;
}

interface StyledSubText {
  isMainColor: boolean;
}

export default function SubText({ text, isMainColor }: SubTextProps) {
  return <StyledSubText isMainColor={isMainColor}>{text}</StyledSubText>;
}

const StyledSubText = styled.h1<StyledSubText>`
  color: ${({ isMainColor }) => (isMainColor ? theme.colors.main : theme.colors.gray3)};
  ${({ theme }) => theme.fonts.regular14pt};
`;
