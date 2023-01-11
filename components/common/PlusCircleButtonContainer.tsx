import React, { useState } from 'react';
import styled from 'styled-components';

import PlusCircleButton from '../../public/assets/icons/plusCircleButton.svg';

interface PlusCircleButtonContainerProps {
  onClick: () => void;
}
export default function PlusCircleButtonContainer({ onClick }: PlusCircleButtonContainerProps) {
  return (
    <StyledPlusCircleButtonContainer onClick={onClick}>
      <PlusCircleButton />
    </StyledPlusCircleButtonContainer>
  );
}

const StyledPlusCircleButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 7.4rem;

  width: 100%;
  max-width: 43rem;
  padding-right: 3.2rem;

  cursor: pointer;
`;
