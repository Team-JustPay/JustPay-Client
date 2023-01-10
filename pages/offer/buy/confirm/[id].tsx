import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from 'styles/theme';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import ToolTip from 'public/assets/images/offer/tooltip.svg';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { buyoffer } from '../../../../recoil/buyoffer';
import { useGetMyInfo } from 'apiHooks/user';
import { useSetSalesSuggestPost } from 'apiHooks/salesPost';

export default function confirm() {
  const reset = useResetRecoilState(buyoffer);
  const postData = useRecoilValue(buyoffer);
  const router = useRouter();
  const { id } = router.query;

  console.log(postData);

  const formData = new FormData();
  formData.append('price', postData.price + '');
  formData.append('purchaseOption', postData.purchaseOption);
  formData.append('description', postData.description);
  formData.append('shippingOption', postData.shippingOption);
  formData.append('productCount', postData.productCount + '');
  formData.append('image', postData.image);

  const { mutate: submitSuggestForm } = useSetSalesSuggestPost(2, formData);

  const { data, isLoading, error } = useGetMyInfo();

  if (isLoading) return <Root>로딩중..</Root>;
  if (error) return <Root>에러가 발생했습니다</Root>;
  if (!data) return null;

  const deliveryInfo = [
    { name: '전화번호', value: `${data.data.data.phoneNumber.replace(/-/g, '')}` },
    { name: '받는분', value: `${data.data.data.shippingInfo.receiverName}` },
    { name: 'GS편의점 점포명', value: `${data.data.data.shippingInfo.gsStoreName}` },
    { name: 'CU편의점 점포명', value: `${data.data.data.shippingInfo.cuStoreName}` },
    { name: '자택 주소', value: `${data.data.data.shippingInfo.address}` },
  ];

  const getDeliveryCost = () => {
    if (postData.shippingOption !== undefined) {
    }
    switch (postData.shippingOption) {
      case '반값택배':
        return 1600;
      case '끼리택배':
        return 1600;
      case '일반우편':
        return 600;
      case '준등기':
        return 1800;
      case '우체국택배':
        return 4000;
      default:
        return 0;
    }
  };

  const cost = [
    { name: '상품금액', value: `${postData.price?.toLocaleString()} 원` },
    { name: '배송 옵션', value: `${postData.shippingOption}` },
    { name: '배송 금액', value: `${getDeliveryCost().toLocaleString()}원` },
    {
      name: '총 금액',
      value: `${postData.price && (postData.price + getDeliveryCost()).toLocaleString()}원`,
    },
  ];

  const MoveToPrevPage = () => {
    reset();
    router.back();
  };

  const postSuggestData = () => {
    submitSuggestForm();
  };

  return (
    <Root>
      <HeaderWrapper>
        <Header title="구매 제시하기" rightButtonText="취소" isHavingBackButton handleLeftButton={MoveToPrevPage} />
      </HeaderWrapper>
      <StyledTitle>배송정보</StyledTitle>
      <StyledInfoContainer>
        {deliveryInfo.map((info, idx) => (
          <StyledContentContainer key={idx.toString()}>
            <StyledKey>{info.name}</StyledKey>
            <StyledValue>{info.value}</StyledValue>
          </StyledContentContainer>
        ))}
      </StyledInfoContainer>
      <StyledTitle>결제 금액</StyledTitle>
      <StyledCostInfoContainer>
        {cost.map((info, idx) => (
          <StyledContentContainer key={idx.toString()}>
            <StyledKey>{info.name}</StyledKey>
            <StyledValue>{info.value}</StyledValue>
          </StyledContentContainer>
        ))}
      </StyledCostInfoContainer>
      <StyledTitle>결제 수단</StyledTitle>
      <StyledInfoContainer>
        <StyledContentContainer>
          <StyledKey>계좌입금</StyledKey>
        </StyledContentContainer>
      </StyledInfoContainer>

      <StyledImageWrapper>
        <ToolTip />
      </StyledImageWrapper>
      <BigButton text="확인" isDisabled={false} onClick={postSuggestData} />
    </Root>
  );
}

const Root = styled.div``;

const HeaderWrapper = styled.div`
  margin-bottom: 1.8rem;
`;

const StyledTitle = styled.div`
  ${theme.fonts.title18pt};
  color: ${theme.colors.white};
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin: 2.4rem 0 4rem 0;
  padding: 0.6rem 2rem;

  border-radius: 0.8rem;
  background-color: ${theme.colors.grey_popup};
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0.8rem 0;
`;

const StyledCostInfoContainer = styled(StyledInfoContainer)`
  & div:last-child > p {
    color: ${theme.colors.main};
  }
`;

const StyledKey = styled.p`
  ${theme.fonts.title14pt};
  color: ${theme.colors.gray2};
`;

const StyledValue = styled.p`
  ${theme.fonts.title16pt};
  color: ${theme.colors.gray3};
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 19.7rem;
`;
