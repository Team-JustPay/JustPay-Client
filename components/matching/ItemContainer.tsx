import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from 'types/container';

export default function ItemContainer({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  &:last-child {
    margin-bottom: 8rem;
  }
`;
