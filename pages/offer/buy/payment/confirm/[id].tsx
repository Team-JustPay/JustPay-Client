import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import PaymentConfirm from 'public/assets/icons/paymentConfirm.svg';
import { useRouter } from 'next/router';
import { useGetPaymentInfo } from 'apiHooks/suggests';

export default function confirmPayment() {
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const { isLoading, error, data } = useGetPaymentInfo(Number(id));

  //TODO: 로딩중 뷰 완성시 교체
  if (!data) return null;
  if (isLoading) return <Root>로딩중..</Root>;
  if (error) return <Root>에러가 발생했습니다</Root>;

  //TODO: 이동할 페이지가 정해지면 교체
  const moveToNextPage = () => {
    // router.push('/')
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText('100002382098');
    setIsCopySuccess(true);
    setTimeout(() => {
      setIsCopySuccess(false);
    }, 2000);
  };

  return (
    <Root>
      <Header title="결제하기" />
      <StyledGuideContainer>
        <PaymentConfirm />
        <StyledTextContainer>
          <GuideText>아래 계좌로 입금하면 최종 결제가 확정됩니다.</GuideText>
          <GuideText>
            <HighlightText>{data.data.data.invoiceDeadline}까지</HighlightText>입금해주세요
          </GuideText>
        </StyledTextContainer>
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
          <StyledAccountNumber>
            <StyledValue>100002382098</StyledValue>
            <StyledCopyButton onClick={handleCopyButton}>복사</StyledCopyButton>
          </StyledAccountNumber>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>입금금액</StyledKey>
          <StyledHighlightValue>{`${(
            data.data.data.price + data.data.data.shippingOption.price
          ).toLocaleString()} 원`}</StyledHighlightValue>
        </StyledContentContainer>
      </StyledAccountInfoContainer>
      <StyledCopySuccessToast isCopySuccess={isCopySuccess}>계좌번호가 복사되었어요</StyledCopySuccessToast>
      <BigButton text="확인" isDisabled={false} onClick={moveToNextPage} />
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

const StyledCopyButton = styled.button`
  ${({ theme }) => theme.fonts.regular14pt};
  color: ${({ theme }) => theme.colors.main};
  width: 3.9rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.main_opacity20};
  margin-left: 0.8rem;
`;

const StyledAccountNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCopySuccessToast = styled.div<{ isCopySuccess: boolean }>`
  display: ${({ isCopySuccess }) => (isCopySuccess ? 'flex' : 'none')};
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 17.7rem;
  height: 3.7rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fonts.medium14pt};

  justify-content: center;
  align-items: center;
  border-radius: 0.8rem; ;
`;
