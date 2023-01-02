import React, { Children, ReactNode } from 'react';
import styled from 'styled-components';

interface TitleTextProps {
  children: ReactNode;
}

export default function TitleText({ children }: TitleTextProps) {
  return <StyledTitleText>{children}</StyledTitleText>;
}

const StyledTitleText = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8rem 0;

  padding: 1.8rem 0 2.4rem;
`;
