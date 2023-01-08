import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetInvoiceInfo, useSetInvoiceInfo } from 'apiHooks/suggests';

import ContentsContainer from './ContentsContainer';
import InputContainer from './InputContainer';
import InvoiceInput from './InvoiceInput';
import { TextBlock } from './SuggestItem';
import BigButton from 'components/common/BigButton';

export default function Container() {
  const [invoiceNum, setInvoiceNum] = useState('');

  const handleInvoiceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceNum(e.target.value);
  };
  const { data: invoiceInfo } = useGetInvoiceInfo(2);
  const { mutate: handleCompleteButton } = useSetInvoiceInfo(2, invoiceNum);
  console.log(invoiceInfo);
  return (
    <>
      <StyledContainer>
        <ContentsContainer text="운송장 정보를 입력해주세요">
          <InputContainer>
            <TextBlock state="disable">{invoiceInfo?.data.data.shippingOption}</TextBlock>
            <InvoiceInput onChangeFunc={handleInvoiceInput} />
          </InputContainer>
        </ContentsContainer>
        <ContentsContainer text="운송장 입력기한">
          <TextBlock state="able">{invoiceInfo?.data.data.invoiceDeadline}</TextBlock>
        </ContentsContainer>
      </StyledContainer>
      <BigButton text="확인" isDisabled={!invoiceNum} onClick={() => handleCompleteButton()} />
    </>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-top: 1.8rem;
`;
