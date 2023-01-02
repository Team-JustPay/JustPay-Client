import React from 'react';
import styled from 'styled-components';

interface ContentsContainerProps {
  children: React.ReactNode;
}

export default function ContentsContainer({ children }: ContentsContainerProps) {
  return <StyledContentsContainer>{children}</StyledContentsContainer>;
}

const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 18rem;
`;
