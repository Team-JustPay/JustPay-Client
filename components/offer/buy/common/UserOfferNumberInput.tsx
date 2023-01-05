import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  isLimitOrder: boolean;
  isofferAllItems?: boolean;
  maximumPrice: number;
}

interface StyledInputProps {
  priceCondition: boolean;
  isLimitOrder: boolean;
}

interface InputTextProps {
  inputText: string;
  priceCondition: boolean;
  isLimitOrder: boolean;
  isofferAllItems?: boolean;
  isUnderMaximumPrice: boolean;
}

export default function UserOfferNumberInput({
  placeholder,
  onChangeFunc,
  inputText,
  isLimitOrder,
  isofferAllItems,
  maximumPrice,
}: InputProps) {
  const priceCondition = !!(Number(inputText) % 500);
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const isUnderMaximumPrice = inputText.length !== 0 && Number(inputText) < maximumPrice;

  const checkInvaildInput = () => {
    if (!isofferAllItems) {
      return priceCondition ? '500원 단위로 입력해주세요' : '원';
    }
    if (isofferAllItems) {
      switch (true) {
        case isUnderMaximumPrice:
          return '현재 최고가보다 낮은 금액입니다';
        case priceCondition:
          return '500원 단위로 입력해주세요';

        default:
          return '원';
      }
    }
  };

  return (
    <InputContainer>
      <GlobalStyledInput
        placeholder={placeholder}
        onChange={onChangeFunc}
        priceCondition={priceCondition}
        value={inputText.replace(priceRegex, ',')}
        type="text"
        readOnly={isLimitOrder}
        isLimitOrder={isLimitOrder}
      />
      <InputText
        inputText={inputText}
        isUnderMaximumPrice={isUnderMaximumPrice}
        priceCondition={priceCondition}
        isLimitOrder={isLimitOrder}
        isofferAllItems={isofferAllItems}>
        {checkInvaildInput()}
      </InputText>
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const GlobalStyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 2rem;

  border: 0.1rem solid;
  border-color: ${({ theme, isLimitOrder }) => (isLimitOrder ? theme.colors.gray1 : theme.colors.gray3)};
  border-radius: 0.8rem;
  background-color: ${({ theme, isLimitOrder }) => (isLimitOrder ? theme.colors.gray0 : theme.colors.gray_background)};
  color: ${({ theme, priceCondition }) => (priceCondition ? theme.colors.sub2 : theme.colors.main)};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border: 0.2rem solid;
    border-color: ${({ theme, priceCondition, isLimitOrder }) =>
      isLimitOrder ? theme.colors.gray1 : priceCondition ? theme.colors.sub2 : theme.colors.main};

    & + strong {
      font-weight: 700;
    }
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const InputText = styled.strong<InputTextProps>`
  position: absolute;
  top: 2rem;
  right: 2rem;

  color: ${({ inputText }) => (inputText ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.gray1)};

  font-weight: 400;

  ${({ priceCondition, isUnderMaximumPrice, isofferAllItems, inputText }) => {
    switch (isofferAllItems) {
      case true:
        return isUnderMaximumPrice || priceCondition
          ? css`
              font-size: 1.2rem;
              line-height: 1.4rem;
              margin-top: 0.4rem;
              color: ${({ theme }) => theme.colors.sub2};
            `
          : css`
              font-size: 1.6rem;
              line-height: 1.9rem;
            `;
      case undefined:
        return priceCondition
          ? css`
              font-size: 1.2rem;
              line-height: 1.4rem;
              margin-top: 0.4rem;
              color: ${({ theme }) => theme.colors.sub2};
            `
          : css`
              font-size: 1.6rem;
              line-height: 1.9rem;
            `;
    }
  }}
`;
