import React from 'react';
import styled from 'styled-components';

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return <SellLayout>{children}</SellLayout>;
}

const SellLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 43rem;
  min-height: calc(100vh - 5.7rem);
  min-height: calc(var(--vh) * 100 - 5.7rem);

  margin: 0 auto;
  padding: 0 1.6rem;

  @media (max-width: 430px) {
    width: 100%;
  }
`;
