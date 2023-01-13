import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TITLE, MENU } from 'constants/headerMessage';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import BulkSaleContainer from 'components/offer/buy/BulkSaleContainer';
import SelectSaleContainer from 'components/offer/buy/SelectSaleContainer';
import DeliveryChoice from 'components/offer/buy/DeliveryChoice';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';
import { useGetSalesSuggestPostInfo } from 'apiHooks/salesPost';

export default function buy() {
  const [postData, setPostData] = useRecoilState(buyoffer);
  const resetOfferData = useResetRecoilState(buyoffer);
  const [isBulkSale, setIsBulkSale] = useState(false);
  const [isLimitOrder, setIsLimitOrder] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  //TODO: 로딩중 뷰 완성시 교체

  const { isLoading, error, data: salesPost } = useGetSalesSuggestPostInfo(Number(id));

  useEffect(() => {
    if (salesPost?.data.data.salesOption === 'BULK') {
      setIsBulkSale(true);
    }
    if (salesPost?.data.data.salesOption === 'BULK_PARTIAL') {
      setIsBulkSale(false);
    }
    if (salesPost?.data.data.priceOption === 'DESIGNATED_PRICE') {
      setIsLimitOrder(true);
    }
    if (salesPost?.data.data.priceOption === 'PRICE_OFFER') {
      setIsLimitOrder(false);
    }
  }, [salesPost]);

  useEffect(() => {
    if (isBulkSale) {
      setPostData((prev) => ({
        ...prev,
        purchaseOption: 'BULK',
        productCount: salesPost?.data.data.productCount,
        image: null,
      }));
    }
    if (isLimitOrder) {
      setPostData((prev) => ({ ...prev, price: salesPost?.data.data.price }));
    }
  }, [postData.shippingOption]);

  if (isLoading) return <Root>로딩중..</Root>;
  if (error) return <Root>에러가 발생했습니다</Root>;
  if (!salesPost) return null;

  const checkIsValidPrice = () => {
    if (postData.purchaseOption === 'BULK') {
      if (isLimitOrder) true;
      if (salesPost.data.data.highestPrice === null) {
        return postData.price && postData.price >= salesPost.data.data.price && postData.price % 500 === 0
          ? true
          : false;
      }
      return postData.price && postData.price >= salesPost.data.data.highestPrice && postData.price % 500 === 0
        ? true
        : false;
    }
    if (postData.purchaseOption === 'PARTIAL') {
      if (isLimitOrder) true;
      return postData.price && postData.price % 500 === 0 ? true : false;
    }
  };
  const checkIsValidCount = () => {
    return postData.productCount && postData.productCount <= salesPost?.data.data.productCount ? true : false;
  };
  const checkPurchaseOption = () => {
    return postData.purchaseOption.length !== 0 ? true : false;
  };

  const checkDeliveryOption = () => {
    return postData.shippingOption.length !== 0 ? true : false;
  };

  const checkImageUpload = () => {
    if (isBulkSale) return true;
    return postData.image !== null ? true : false;
  };

  const approveNextStep = () => {
    return checkImageUpload() &&
      checkDeliveryOption() &&
      checkPurchaseOption() &&
      checkIsValidCount() &&
      checkIsValidPrice()
      ? true
      : false;
  };

  const handleNextStep = () => {
    if (approveNextStep()) {
      router.push(`/offer/buy/confirm/${id}`);
    }
  };

  const moveToGuidePage = () => {
    resetOfferData();
    router.back();
  };

  console.log(isBulkSale);
  console.log(isLimitOrder);
  console.log(postData);
  console.log(salesPost);
  return (
    <Root>
      <Header
        title={TITLE.OFFER_TO_SELLER}
        rightButtonText={MENU.BACK}
        isHavingBackButton
        handleLeftButton={moveToGuidePage}
      />
      {isBulkSale ? (
        <BulkSaleContainer
          isLimitOrder={isLimitOrder}
          highestPrice={
            salesPost.data.data.highestPrice === null ? salesPost.data.data.price : salesPost.data.data.highestPrice
          }
          src={salesPost.data.data.mainImageUrl}
        />
      ) : (
        <SelectSaleContainer
          isLimitOrder={isLimitOrder}
          maxCount={salesPost?.data.data.productCount}
          maximumPrice={
            salesPost.data.data.highestPrice === null ? salesPost.data.data.price : salesPost.data.data.highestPrice
          }
          limitOrderPrice={salesPost.data.data.price}
          src={salesPost.data.data.mainImageUrl}
        />
      )}
      <DeliveryChoice shippingOptions={salesPost.data.data.ShippingOptions} />
      {/* //TODO: 해당 버튼 온클릭시 리코일 전역 상태에 데이터 전달 */}
      <BigButton text="다음" isDisabled={!approveNextStep()} onClick={handleNextStep} />
    </Root>
  );
}

export async function getServerSideProps({ query: { id } }: { query: { id: string } }) {
  return {
    props: {
      id,
    },
  };
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
