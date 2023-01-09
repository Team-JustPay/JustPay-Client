import React, { useState } from 'react';
import styled from 'styled-components';

import PlusCircleButton from '../../public/assets/icons/plusCircleButton.svg';

export default function PlusCircleButtonContainer() {
  return (
    <StyledPlusCircleButtonContainer>
      <PlusCircleButton />
    </StyledPlusCircleButtonContainer>
  );
}

const StyledPlusCircleButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 7.4rem;

  width: 100%;
  max-width: 43rem;
  padding-right: 3.2rem;
`;
