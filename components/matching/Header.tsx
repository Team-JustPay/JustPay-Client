import React from 'react';
import styled from 'styled-components';

import HeaderFunc from '../../public/assets/icons/HeaderFunc.svg';
import HeaderButton from '../../public/assets/icons/HeaderButton.svg';

interface HeaderProps {
  isMine: boolean;
}

export default function Header({ isMine }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderFunc />
      <HeaderText isMine={isMine}>제시 현황</HeaderText>
      {isMine ? (
        <ButtonContainer>
          <HeaderButton />
          <HeaderButton />
        </ButtonContainer>
      ) : (
        <HeaderButton />
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem 2rem 1.5rem 2.4rem;
`;

const HeaderText = styled.h1<HeaderProps>`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.7rem;

  color: ${({ theme }) => theme.colors.white};

  margin-left: ${({ isMine }) => isMine && '26px'};
`;

const ButtonContainer = styled.section`
  display: flex;
  gap: 1.2rem;
`;
