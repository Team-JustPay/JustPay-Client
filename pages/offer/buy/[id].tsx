import React, { useState } from 'react';
import styled from 'styled-components';
import { TITLE, MENU } from 'constants/headerMessage';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import BulkSaleContainer from 'components/offer/buy/BulkSaleContainer';
import SelectSaleContainer from 'components/offer/buy/SelectSaleContainer';
import DeliveryChoice from 'components/offer/buy/DeliveryChoice';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';

export default function buy() {
  const postData = useRecoilValue(buyoffer);
  const router = useRouter();
  const { id } = router.query;

  const [isBulkSale, setIsBulkSale] = useState(false);
  const [isLimitOrder, setIsLimitOrder] = useState(false);
  const [isValidOffer, setIsVaildOffer] = useState(true);

  const handleNextStep = () => {
    if (isValidOffer) {
      router.push(`/offer/buy/confirm/${id}`);
      console.log(postData);
    }
  };

  const moveToGuidePage = () => {
    router.push(`/offer/buy/guide/${id}`);
  };

  return (
    <Root>
      <Header
        title={TITLE.OFFER_TO_SELLER}
        rightButtonText={MENU.BACK}
        isHavingBackButton
        handleLeftButton={moveToGuidePage}
      />
      {isBulkSale ? (
        <BulkSaleContainer isLimitOrder={isLimitOrder} />
      ) : (
        <SelectSaleContainer isLimitOrder={isLimitOrder} />
      )}
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
