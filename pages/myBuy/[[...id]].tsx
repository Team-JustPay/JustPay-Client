import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import GNB from 'components/common/GNB';

export default function checkInvoice() {
  const moveToPrevPage = () => {
    Router.push('/myBuy/${1}');
  };

  return (
    <>
      <Header isHavingBackButton={true} handleLeftButton={moveToPrevPage} title={TITLE.CHECK_INVOICE} />
      <StyledInvoiceDeadLine>
        운송장 입력기한
        <StyledInvoiceBox></StyledInvoiceBox>
      </StyledInvoiceDeadLine>
      <StyledInvoiceNumber>
        운송장 번호
        <StyledInvoiceBox></StyledInvoiceBox>
      </StyledInvoiceNumber>
      <GNB />
    </>
  );
}

const StyledInvoiceDeadLine = styled.section`
  margin-top: 1.8rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt};
`;

const StyledInvoiceNumber = styled.section`
  margin-top: 4rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt};
`;

const StyledInvoiceBox = styled.section`
  width: 35.8rem;
  height: 6rem;
  margin-top: 2.4rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  ${({ theme }) => theme.fonts.title14pt};
  border-radius: 0.8rem;
`;
