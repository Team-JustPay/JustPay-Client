import React from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGetInvoiceInfo } from 'apiHooks/suggests';

import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import GNB from 'components/common/GNB';

export default function checkInvoice() {
  const router = useRouter();
  const { id } = router.query;
  const { data: invoiceInfo } = useGetInvoiceInfo(Number(id));
  console.log(invoiceInfo);

  const moveToPrevPage = () => {
    Router.push('/myBuy/${1}');
  };

  return (
    <>
      <Header isHavingBackButton={true} handleLeftButton={moveToPrevPage} title={TITLE.CHECK_INVOICE} />
      <StyledInvoiceDeadLine>
        운송장 입력기한
        <StyledInvoiceBox>{invoiceInfo?.data.data.invoiceDeadline}</StyledInvoiceBox>
      </StyledInvoiceDeadLine>
      <StyledInvoiceNumber>
        운송장 번호
        <StyledInvoiceBox>{invoiceInfo?.data.data.shippingOption}</StyledInvoiceBox>
        <InvoiceNumText>{invoiceInfo?.data.data.invoiceNumber}</InvoiceNumText>
      </StyledInvoiceNumber>
      <GNB />
    </>
  );
}

const StyledInvoiceDeadLine = styled.section`
  margin-top: 1.8rem;

  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fonts.title18pt};

  font-weight: 700;
`;

const StyledInvoiceNumber = styled.section`
  position: relative;

  margin-top: 4rem;

  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.title18pt};
`;

const StyledInvoiceBox = styled.section`
  width: 100%;
  padding: 2.1rem 2rem;
  margin-top: 2.4rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  ${({ theme }) => theme.fonts.title14pt};
  border-radius: 0.8rem;
`;

const InvoiceNumText = styled.p`
  position: absolute;
  top: 6.4rem;
  right: 1.6rem;

  color: ${({ theme }) => theme.colors.gray3};

  font-weight: 700;
`;
