import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainText from 'components/common/MainText';
import DeliveryOptionContainer from 'components/offer/buy/common/DeliveryOptionContainer';

interface ShippingOptionsProps {
  shippingOptions: [];
}

export default function DeliveryChoice({ shippingOptions }: ShippingOptionsProps) {
  return (
    <Root>
      <StyledTextContainer>
        <MainText text="배송가능 옵션을 1가지만 선택하세요" />
      </StyledTextContainer>
      <DeliveryOptionContainer shippingOptions={shippingOptions} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;
