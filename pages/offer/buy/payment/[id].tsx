import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Header from 'components/common/Header';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import Mockup from '/public/assets/images/mockupImage.png';
import SaleInfoContainer from 'components/offer/buy/payment/SaleInfoContainer';
import BigButton from 'components/common/BigButton';
import { useRouter } from 'next/router';

export default function payment() {
  const router = useRouter();
  const { id } = router.query;
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

  const confirmPayment = () => {
    router.push(`/offer/buy/payment/confirm/${id}`);
  };

  return (
    <Root>
      <Header title="결제하기" rightButtonText="취소" handleRightButton={() => {}} />
      <TitleText>
        <SubText text="저스트페이만의 빠르고 안전한 결제!" isMainColor={false} />
        <MainText text="제시 내용" />
      </TitleText>
      <StyledImageWrapper>
        <Image src={Mockup} />
      </StyledImageWrapper>
      <SaleInfoContainer
        productCount={data.productCount}
        shippingOption={data.shippingOption.name}
        salesOption={data.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
      />
      {data.description !== '' && <StyledDescription>{data.description}</StyledDescription>}

      <TitleText>
        <MainText text="배송지 정보" />
      </TitleText>
      <StyledShippingInfoContainer>
        <StyledContentContainer>
          <StyledKey>전화번호</StyledKey>
          <StyledValue>{data.suggester.phoneNumber}</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>받는분</StyledKey>
          <StyledValue>{data.suggester.shippingInfo.receiverName}</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>택배주소</StyledKey>
          <StyledValue>{data.suggester.shippingInfo.cuStoreName}</StyledValue>
        </StyledContentContainer>
      </StyledShippingInfoContainer>
      <TitleText>
        <MainText text="판매자가 설정한 운송장 입력기한" />
      </TitleText>
      <StyledDescriptionContainer> {`${data.invoiceDeadline}까지`} </StyledDescriptionContainer>
      <TitleText>
        <MainText text="결제 금액" />
      </TitleText>
      <StyledCostInfoContainer>
        <StyledContentContainer>
          <StyledKey>상품 금액</StyledKey>
          <StyledValue>{`${data.price.toLocaleString('ko-KR')} 원`}</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>배송 옵션</StyledKey>
          <StyledValue>{data.shippingOption.name}</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>배송 금액</StyledKey>
          <StyledValue>{`${data.shippingOption.price} 원`}</StyledValue>
        </StyledContentContainer>
        <StyledContentContainer>
          <StyledKey>총 금액</StyledKey>
          <StyledValue>{`${(data.price + data.shippingOption.price).toLocaleString('ko-KR')} 원`}</StyledValue>
        </StyledContentContainer>
      </StyledCostInfoContainer>

      <TitleText>
        <MainText text="결제 수단" />
      </TitleText>
      <PaymentMethod>계좌 입금</PaymentMethod>
      <BigButton text="결제하기" isDisabled={false} onClick={confirmPayment} />
    </Root>
  );
}

const Root = styled.div``;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.8rem;
  width: 100%;
  height: 24.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};
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

const StyledDescription = styled(StyledDescriptionContainer)`
  margin-bottom: 2.2rem;
`;

const StyledShippingInfoContainer = styled(StyledDescriptionContainer)`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 0.6rem 2rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
`;

const StyledCostInfoContainer = styled(StyledShippingInfoContainer)`
  & div:last-child > p {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const StyledKey = styled.p`
  ${({ theme }) => theme.fonts.regular14pt};
  color: ${({ theme }) => theme.colors.gray2};
`;

const StyledValue = styled.p`
  ${({ theme }) => theme.fonts.title16pt};
  color: ${({ theme }) => theme.colors.grey3};
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0.8rem 0;
`;

const PaymentMethod = styled(StyledDescriptionContainer)`
  margin-bottom: 7rem;
`;