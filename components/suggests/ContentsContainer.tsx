import React from 'react';
import styled from 'styled-components';

import MainText from 'components/common/MainText';

interface ContainerProps {
  text: string;
  children: React.ReactNode;
}

export default function ContentsContainer({ text, children }: ContainerProps) {
  return (
    <StyledContainer>
      <MainText text={text} />
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
