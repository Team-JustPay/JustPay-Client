import React from 'react';
import styled from 'styled-components';

interface MainTextProps {
  text: string;
}
export default function MainText({ text }: MainTextProps) {
  return <StyledMainText>{text}</StyledMainText>;
}

const StyledMainText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt};
`;
