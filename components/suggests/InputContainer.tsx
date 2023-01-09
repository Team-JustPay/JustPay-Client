import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from 'types/container';

export default function InputContainer({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
