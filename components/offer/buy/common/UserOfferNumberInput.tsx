import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  isLimitOrder: boolean;
  isofferAllItems?: boolean;
  maximumPrice: number;
}

interface StyledInputProps {
  priceCondition: boolean;
  isLimitOrder: boolean;
  isUnderMaximumPrice: boolean;
  isofferAllItems?: boolean;
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
        isUnderMaximumPrice={isUnderMaximumPrice}
        isofferAllItems={isofferAllItems}
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
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  ${({ priceCondition, isUnderMaximumPrice, isofferAllItems }) => {
    if (isofferAllItems) {
      return isUnderMaximumPrice || priceCondition
        ? css`
            color: ${({ theme }) => theme.colors.sub2};
          `
        : css`
            color: ${({ theme }) => theme.colors.main};
          `;
    } else {
      return priceCondition
        ? css`
            color: ${({ theme }) => theme.colors.sub2};
          `
        : css`
            color: ${({ theme }) => theme.colors.main};
          `;
    }
  }}

  &:focus {
    border: 0.2rem solid;
    border-color: ${({ priceCondition, isUnderMaximumPrice, isofferAllItems }) => {
      switch (isofferAllItems) {
        case true:
          return isUnderMaximumPrice || priceCondition
            ? css`
                border-color: ${({ theme }) => theme.colors.sub2};
              `
            : css`
                border-color: ${({ theme }) => theme.colors.main};
              `;
        case undefined:
          return priceCondition
            ? css`
                border-color: ${({ theme }) => theme.colors.sub2};
              `
            : css`
                border-color: ${({ theme }) => theme.colors.main};
              `;
      }
    }};

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

  color: ${({ inputText, theme }) => (inputText ? theme.colors.main : theme.colors.gray1)};

  font-weight: 400;

  ${({ priceCondition, isUnderMaximumPrice, isofferAllItems }) => {
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
