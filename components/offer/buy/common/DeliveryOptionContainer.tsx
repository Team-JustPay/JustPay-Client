import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DeliveryOption from 'components/offer/buy/common/DeliveryOption';

interface ShippingOptionsProps {
  shippingOptions: [];
}

export default function DeliveryOptionContainer({ shippingOptions }: ShippingOptionsProps) {
  const [deliveryOptions, setDeliveryOptions] = useState([
    { id: 1, name: 'GS택배', price: 1600, contents: ['3-5일 소요', 'GS25 택배'] },
    { id: 2, name: 'CU택배', price: 1600, contents: ['4-6일 소요', 'CU 택배'] },
    { id: 3, name: '일반우편', price: 600, contents: ['3-4일 소요', '분실위험'] },
    { id: 4, name: '준등기', price: 1800, contents: ['2-3일 소요'] },
    { id: 5, name: '우체국택배', price: 4000, contents: ['다음날 배송', '등기소포'] },
  ]);

  useEffect(() => {
    setDeliveryOptions(shippingOptions);
  }, [shippingOptions]);

  const [currentUserChoice, setCurrentUserChoice] = useState(0);

  //TODO: 판매글 정보 조회 API에서 배송옵션 받아서 가공해야함

  const DeliveryOptionList = deliveryOptions.map((option) => (
    <DeliveryOption
      isAllowedSinglePick
      id={option.id}
      name={option.name}
      price={option.price}
      key={option.id}
      contents={option.contents}
      currentUserChoice={currentUserChoice}
      onClick={() => setCurrentUserChoice(option.id)}
    />
  ));

  return <Root>{DeliveryOptionList}</Root>;
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 5.8rem;
`;
