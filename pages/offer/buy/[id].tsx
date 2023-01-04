import React, { useState } from 'react';
import styled from 'styled-components';
import { TITLE, MENU } from 'constants/headerMessage';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import LimitOrderContainer from 'components/offer/buy/LimitOrderContainer';
import AllowOfferContainer from 'components/offer/buy/AllowOfferContainer';
import DeliveryChoice from 'components/offer/buy/DeliveryChoice';
import { useRouter } from 'next/router';

export default function buy() {
  const router = useRouter();
  const { id } = router.query;

  const [isLimitOrder, setIsLimitOrder] = useState(false);
  const [isValidOffer, setIsVaildOffer] = useState(true);

  const CorrectInfomation = () => {};

  const handleNextStep = () => {
    if (isValidOffer) {
      router.push(`/offer/buy/confirm/${id}`);
      console.log('hi');
    }
  };

  return (
    <Root>
      <Header title={TITLE.OFFER_TO_SELLER} rightButtonText={MENU.BACK} isHavingBackButton />
      {isLimitOrder ? <LimitOrderContainer /> : <AllowOfferContainer />}
      <DeliveryChoice />
      {/* //TODO: 해당 버튼 온클릭시 리코일 전역 상태에 데이터 전달 */}
      <BigButton text="다음" isDisabled={!isValidOffer} onClick={handleNextStep} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
