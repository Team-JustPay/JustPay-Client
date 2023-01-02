import React from 'react';
import styled from 'styled-components';

interface CheckInfoBoxProps {
  infoTitle: string;
  infoText: string;
}

export default function CheckInfoBox({ infoTitle, infoText }: CheckInfoBoxProps) {
  return (
    <Root>
      <StyledInfoTitle>{infoTitle}</StyledInfoTitle>
      <StyledInfoText>{infoText}</StyledInfoText>
    </Root>
  );
}

const Root = styled.div`
  height: 9.6rem;
  width: 17.3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray0};
`;
const StyledInfoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.title14pt};
  margin-top: 1.2rem;
`;
const StyledInfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.fonts.title16pt}
  margin-top: 0.8rem;
`;
