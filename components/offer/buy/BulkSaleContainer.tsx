import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainText from 'components/common/MainText';
import theme from 'styles/theme';
import UserOfferNumberInput from 'components/offer/buy/common/UserOfferNumberInput';
import { useRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';

export default function BulkSaleContainer({ isLimitOrder }: { isLimitOrder: boolean }) {
  const [offerData, setOfferData] = useRecoilState(buyoffer);
  const [inputText, setInputText] = useState('');
  const limitOrderPrice = 100000;

  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;

  setOfferData((prev) => ({ ...prev, price: limitOrderPrice }));

  console.log('리코일에 들어간 데이터:' + offerData.price);

  return (
    <Root>
      <StyledImageWrapper />
      <StyledTextContainer>
        <MainText text="구매하는 가격을 확인하세요" />
      </StyledTextContainer>
      <StyledInputContainer>
        {/* //TODO: API 명세의 프로퍼티의 값을 받아와서 placeholder에 넣어주기 */}
        <UserOfferNumberInput
          placeholder={limitOrderPrice.toString().replace(priceRegex, ',')}
          inputTextGuide="원"
          inputText={inputText}
          isLimitOrder={isLimitOrder}
          maximumPrice={limitOrderPrice}
        />
      </StyledInputContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24.2rem;
  margin: 1.8rem 0 4rem 0;

  background-color: ${theme.colors.black};
  border-radius: 0.8rem;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 4rem;
`;
