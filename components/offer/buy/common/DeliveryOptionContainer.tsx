import React, { useState } from 'react';
import styled from 'styled-components';
import DeliveryOption from 'components/offer/buy/common/DeliveryOption';

export default function DeliveryOptionContainer() {
  const [deliveryOptions, setDeliveryOptions] = useState([
    { id: 1, name: '반값택배', price: '1,600원', contents: ['3-5일 소요', 'GS25 택배'] },
    { id: 2, name: '끼리택배', price: '1,600원', contents: ['4-6일 소요', 'CU 택배'] },
    { id: 3, name: '일반우편', price: '600원', contents: ['3-4일 소요', '분실위험'] },
    { id: 4, name: '준등기', price: '1,800원', contents: ['2-3일 소요'] },
    { id: 5, name: '우체국택배', price: '4,000원', contents: ['다음날 배송', '등기소포'] },
  ]);

  const [currentUserChoice, setCurrentUserChoice] = useState(0);

  //TODO: 판매글 정보 조회 API에서 배송옵션 받아서 가공해야함
  const SelectedDeliveryOptions = [...deliveryOptions];

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
