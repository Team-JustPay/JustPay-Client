import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}

interface StyledInputProps {
  priceCondition: boolean;
}

interface InputTextProps {
  inputText: string;
  priceCondition: boolean;
}

export default function UserInput({ placeholder, inputTextGuide, onChangeFunc, inputText }: InputProps) {
  const priceCondition = !!(inputTextGuide === '원' && Number(inputText) % 500);

  return (
    <InputContainer>
      <GlobalStyledInput
        placeholder={placeholder}
        onChange={onChangeFunc}
        priceCondition={priceCondition}
        value={inputText}
        type="text"
      />
      <InputText inputText={inputText} priceCondition={priceCondition}>
        {priceCondition ? '500원 단위로 입력해주세요' : inputTextGuide}
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

  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  color: ${({ theme, priceCondition }) => (priceCondition ? theme.colors.sub2 : theme.colors.main)};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border-color: ${({ theme, priceCondition }) => (priceCondition ? theme.colors.sub2 : theme.colors.main)};

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
  ${({ priceCondition }) =>
    priceCondition
      ? css`
          font-size: 1.2rem;
          line-height: 1.4rem;
          margin-top: 0.4rem;
          color: ${({ theme }) => theme.colors.sub2};
        `
      : css`
          font-size: 1.6rem;
          line-height: 1.9rem;
        `}
`;
