import React from 'react';
import styled from 'styled-components';

interface GuideContainerProps {
  children: React.ReactNode;
}

export default function GuideContainer({ children }: GuideContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  padding: 3.8rem 1.6rem 2.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};

  text-align: center;
`;
