import React from 'react';
import styled from 'styled-components';

import SellListIcon from '../../public/assets/icons/SellList.svg';
import JusyPayIcon from '../../public/assets/icons/JustPay.svg';
import SaleFInishIcon from '../../public/assets/icons/SaleFinish.svg';
import SaleDetailIcon from '../../public/assets/icons/SaleDetail.svg';
import HeaderButton from '../../public/assets/icons/HeaderButton.svg';

interface HeaderProps {
  isMine: boolean;
  modalOpenFunc: () => void;
}

interface HeaderTextProps {
  isMine: boolean;
}

export default function Header({ isMine, modalOpenFunc }: HeaderProps) {
  return (
    <HeaderContainer>
      {isMine ? <SellListIcon /> : <JusyPayIcon />}
      <HeaderText isMine={isMine}>제시 현황</HeaderText>
      {isMine ? (
        <ButtonContainer>
          <SaleFInishIcon onClick={modalOpenFunc} />
          <SaleDetailIcon />
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

const HeaderText = styled.h1<HeaderTextProps>`
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
