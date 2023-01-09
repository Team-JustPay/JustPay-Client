import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TITLE, MENU } from 'constants/headerMessage';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import BulkSaleContainer from 'components/offer/buy/BulkSaleContainer';
import SelectSaleContainer from 'components/offer/buy/SelectSaleContainer';
import DeliveryChoice from 'components/offer/buy/DeliveryChoice';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';

export default function buy() {
  const [postData, setPostData] = useRecoilState(buyoffer);
  const router = useRouter();
  const { id } = router.query;
  const [isBulkSale, setIsBulkSale] = useState(false);
  const [isLimitOrder, setIsLimitOrder] = useState(true);
  const [isValidOffer, setIsVaildOffer] = useState(true);

  const maximumPrice = 100000;
  const originItemCount = 20;

  const data = {
    price: 100000,
  };

  useEffect(() => {
    if (isBulkSale) {
      setPostData((prev) => ({ ...prev, productCount: originItemCount }));
      setPostData((prev) => ({ ...prev, purchaseOption: 'BULK' }));
    }
    if (isLimitOrder) {
      setPostData((prev) => ({ ...prev, price: data.price }));
    }
  }, []);

  const checkIsValidPrice = () => {
    if (postData.purchaseOption === 'BULK') {
      if (isLimitOrder) true;
      return postData.price && postData.price >= maximumPrice && postData.price % 500 === 0 ? true : false;
    }
    if (postData.purchaseOption === 'PARTIAL') {
      if (isLimitOrder) true;
      return postData.price && postData.price % 500 === 0 ? true : false;
    }
  };
  const checkIsValidCount = () => {
    return postData.productCount && postData.productCount <= originItemCount ? true : false;
  };
  const checkPurchaseOption = () => {
    return postData.purchaseOption.length !== 0 ? true : false;
  };

  const checkDeliveryOption = () => {
    return postData.shippingOption.length !== 0 ? true : false;
  };
  const approveNextStep = () => {
    return checkDeliveryOption() && checkPurchaseOption() && checkIsValidCount() && checkIsValidPrice() ? true : false;
  };

  console.log(postData);

  const handleNextStep = () => {
    if (isValidOffer) {
      router.push(`/offer/buy/confirm/${id}`);
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
      <BigButton text="다음" isDisabled={!approveNextStep()} onClick={handleNextStep} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
