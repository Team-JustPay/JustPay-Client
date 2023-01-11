import React from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';

import SellListIcon from '../../public/assets/icons/SellList.svg';
import JusyPayIcon from '../../public/assets/icons/JustPay.svg';
import SaleFInishIcon from '../../public/assets/icons/SaleFinish.svg';
import SaleDetailIcon from '../../public/assets/icons/SaleDetail.svg';

interface HeaderProps {
  isMine: boolean;
  suggestId: number;
  modalOpenFunc: () => void;
}

interface HeaderTextProps {
  isMine: boolean;
}

export default function Header({ isMine, modalOpenFunc, suggestId }: HeaderProps) {
  const { query } = useRouter();
  const handleClickLeftButton = () => {
    Router.push('/my/sell');
  };

  const handleClickDetailButton = () => {
    Router.push({
      pathname: `/sell/post/${suggestId}`,
      query: { id: query.id },
    });
  };

  return (
    <HeaderContainer>
      {isMine ? (
        <SellListIcon onClick={handleClickLeftButton} />
      ) : (
        <JusyPayIcon onClick={() => Router.push('/my/buy')} />
      )}
      <HeaderText isMine={isMine}>제시 현황</HeaderText>
      {isMine ? (
        <ButtonContainer>
          <SaleFInishIcon onClick={modalOpenFunc} />
          <SaleDetailIcon onClick={handleClickDetailButton} />
        </ButtonContainer>
      ) : (
        <SaleDetailIcon onClick={handleClickDetailButton} />
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem 2rem 1.5rem 0.8rem;

  position: fixed;
  max-width: 43rem;
  top: 0;
  z-index: 10;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_background};
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
