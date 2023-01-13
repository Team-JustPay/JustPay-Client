import React from 'react';
import styled from 'styled-components';

import NoItemIcon from '../../public/assets/icons/Notice.svg';

export default function NoItem({ text }: { text: string }) {
  return (
    <NoItemContainer>
      <NoItemIcon />
      <NoItemText>{text}</NoItemText>
    </NoItemContainer>
  );
}

const NoItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  margin-top: 12.4rem;
`;

const NoItemText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7rem;

  color: ${({ theme }) => theme.colors.gray3};
`;
