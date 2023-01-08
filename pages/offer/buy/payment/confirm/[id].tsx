import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import PaymentConfirm from 'public/assets/icons/paymentConfirm.svg';

export default function confirmPayment() {
  const data = {
    id: 3,
    imageUrl: '<url>',
    productCount: 1,
    purchaseOption: 'BULK',
    price: 1700000,
    totalPrice: 171800,
    description: '설명...',
    status: 0,
    invoiceDeadline: '2023.01.09 (월)',
    suggester: {
      phoneNumber: '010-2342-2342',
      shippingInfo: {
        receiverName: '전희선',
        address: '서울시 고백구 행복동 23-1',
        cuStoreName: 'CU 홍대입구점',
        gsStoreName: 'GS 홍대입구점',
      },
    },
    shippingOption: {
      name: '반값택배',
      price: 1600,
    },
  };

  return (
    <Root>
      <Header title="결제하기" />
      <StyledGuideContainer>
        <PaymentConfirm />
        <StyledTextContainer>
          <GuideText>아래 계좌로 입금하면 최종 결제가 확정됩니다.</GuideText>
          <GuideText>
            <HighlightText>{data.invoiceDeadline}까지</HighlightText>입금해주세요
          </GuideText>
        </StyledTextContainer>
        <BigButton text="확인" isDisabled={false} />
      </StyledGuideContainer>
      <StyledAccountInfoContainer>
        <StyledContentContainer>
          <StyledKey>입금자명</StyledKey>
          <StyledValue>김남준</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>은행명</StyledKey>
          <StyledValue>토스뱅크</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>계좌번호</StyledKey>
          <StyledValue>100002382098</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>입금금액</StyledKey>
          <StyledHighlightValue>{`${(
            data.price + data.shippingOption.price
          ).toLocaleString()} 원`}</StyledHighlightValue>
        </StyledContentContainer>
      </StyledAccountInfoContainer>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.2rem;
`;

const GuideText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.medium14pt};
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.medium14pt};
`;

const StyledGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 12rem;
`;

const StyledDescriptionContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_popup};
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.regular14pt};
  border-radius: 0.8rem;
  padding: 1.6rem 2rem;
  margin-bottom: 2.2rem;
`;

const StyledAccountInfoContainer = styled(StyledDescriptionContainer)`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 0.6rem 2rem;
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
`;

const StyledKey = styled.p`
  ${({ theme }) => theme.fonts.regular14pt};
  color: ${({ theme }) => theme.colors.gray2};
`;

const StyledValue = styled.p`
  ${({ theme }) => theme.fonts.title16pt};
  color: ${({ theme }) => theme.colors.grey3};
`;

const StyledHighlightValue = styled(StyledValue)`
  color: ${({ theme }) => theme.colors.main};
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0.8rem 0;
`;
