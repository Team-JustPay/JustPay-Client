import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MainText from 'components/common/MainText';
import theme from 'styles/theme';
import UserOfferNumberInput from 'components/offer/buy/common/UserOfferNumberInput';
import { useRecoilState } from 'recoil';
import { buyoffer } from '../../../recoil/buyoffer';
import { getLocalNumber } from '../../../utils/price';
import Image from 'next/image';

interface BulkContainerProps {
  isLimitOrder: boolean;
  highestPrice: number;
  src: string;
}

export default function BulkSaleContainer({ isLimitOrder, highestPrice, src }: BulkContainerProps) {
  const [offerData, setOfferData] = useRecoilState(buyoffer);
  const [inputNumber, setInputNumber] = useState('');
  const [maximumPrice, setMaximumPrice] = useState(0);

  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;

  useEffect(() => {
    setMaximumPrice(highestPrice);
  }, [highestPrice]);

  const CheckCorrectPrice = (number: number) => {
    if (number > maximumPrice && number % 500 === 0) {
      return true;
    }
    return false;
  };

  const handleNumberInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '').replace(/,/g, '');
    setInputNumber(value);
    if (inputNumber !== value) {
      setOfferData((prev) => ({ ...prev, price: Number(value) }));
    }
  }, []);

  return (
    <Root>
      <StyledImageWrapper>
        <Image src={src} layout="fill" />
      </StyledImageWrapper>
      <StyledTextContainer>
        <MainText text="구매하는 가격을 확인하세요" />
      </StyledTextContainer>
      <StyledInputContainer>
        {/* //TODO: API 명세의 프로퍼티의 값을 받아와서 placeholder에 넣어주기 */}
        <UserOfferNumberInput
          placeholder={isLimitOrder ? maximumPrice.toString().replace(priceRegex, ',') : '500원 단위로 입력해주세요'}
          inputTextGuide="원"
          inputText={inputNumber}
          isLimitOrder={isLimitOrder}
          maximumPrice={maximumPrice}
          onChangeFunc={handleNumberInput}
          highestPrice={maximumPrice}
          isofferAllItems
        />
        <SubtitleContainer>
          {isLimitOrder === false && `현재 최고제시가격 ${getLocalNumber(maximumPrice)}원`}
        </SubtitleContainer>
      </StyledInputContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24.2rem;
  margin: 1.8rem 0 4rem 0;

  background-color: ${theme.colors.grey_popup};
  border-radius: 0.8rem;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const StyledInputContainer = styled.div`
  margin-bottom: 4rem;
`;

const SubtitleContainer = styled.div`
  margin: 0.8rem 0 4rem 0;

  ${theme.fonts.regular14pt}
  color: ${theme.colors.main};
`;
