import React from 'react';
import styled from 'styled-components';
import { ContainerProps } from 'types/container';

export default function layout({ children }: ContainerProps) {
  return <SellLayout>{children}</SellLayout>;
}

const SellLayout = styled.section`
  width: 43rem;
  min-height: calc(100vh);
  min-height: calc(var(--vh) * 100);

  margin: 0 auto;
  padding: 0 1.6rem;

  @media (max-width: 430px) {
    width: 100%;
  }
`;
