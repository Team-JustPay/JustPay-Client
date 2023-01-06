import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from 'types/container';

export default function SuggestContainer({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section``;
