import React from 'react';
import styled from 'styled-components';

interface SubTextProps {
  text: string;
}
export default function SubText({ text }: SubTextProps) {
  return <StyledSubText>{text}</StyledSubText>;
}

const StyledSubText = styled.h1`
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.regular14pt};
`;
