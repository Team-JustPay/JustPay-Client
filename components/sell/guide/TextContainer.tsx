import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from 'types/container';

export default function TextContainer({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.article`
  width: 100%;
`;
