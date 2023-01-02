import React from 'react';
import styled from 'styled-components';

interface ProgressProps {
  stage: number;
}

export default function Progress({ stage }: ProgressProps) {
  return (
    <StyledProgress>
      <strong>{stage}</strong>/3
    </StyledProgress>
  );
}

const StyledProgress = styled.p`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  color: ${({ theme }) => theme.colors.gray3};
  font-size: 1.2rem;
  line-height: 1.4rem;

  strong {
    color: ${({ theme }) => theme.colors.main};
  }
`;
