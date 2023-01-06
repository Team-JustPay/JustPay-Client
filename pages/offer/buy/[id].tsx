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
  const [isBulkSale, setIsBulkSale] = useState(true);
  const [isLimitOrder, setIsLimitOrder] = useState(false);
  const [isValidOffer, setIsVaildOffer] = useState(true);

  const maximumPrice = 100000;
  const originItemCount = 10;
  const vaildInput = postData.price !== null && postData.price % 500 === 0 && postData.price >= maximumPrice;

  useEffect(() => {
    if (isBulkSale) {
      setPostData((prev) => ({ ...prev, productCount: originItemCount }));
      setPostData((prev) => ({ ...prev, purchaseOption: 'BULK' }));
    }
  }, []);

  const checkIsValid = (number: number) => {
    if (number >= maximumPrice && number % 500 === 0) {
      return true;
    }
  };
  const approveNextStep = () => {
    return postData.shippingOption.length !== 0 && postData.price && checkIsValid(postData.price) ? true : false;
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
