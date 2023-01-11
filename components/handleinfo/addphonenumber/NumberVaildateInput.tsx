import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  validateInput: string;
  isValidate?: boolean;
}

interface InputTextProps {
  inputText?: string;
  validateInput?: string;
  placeholder?: string;
  inputTextGuide?: string;
  isValidate?: boolean;
}

interface StyledInputProps {
  inputText?: string;
  validateInput?: string;
  isValidate: boolean;
}

export default function CallNumberInput({
  placeholder,
  inputTextGuide,
  onChangeFunc,
  inputText,
  validateInput,
}: InputProps) {
  const isValidate = inputText !== validateInput && inputText !== '';

  return (
    <InputContainer>
      <GlobalStyledInput
        placeholder={placeholder}
        onChange={onChangeFunc}
        value={inputText}
        type="number"
        isValidate={isValidate}
      />
      <InputText inputText={inputText} validateInput={validateInput} isValidate={isValidate}>
        {isValidate ? inputTextGuide : ''}
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

  color: ${({ theme, isValidate }) => (isValidate ? theme.colors.sub2 : theme.colors.main)};
  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border-color: ${({ theme, isValidate }) => (isValidate ? theme.colors.sub2 : theme.colors.main)};
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
  font-size: 1.6rem;
  line-height: 1.9rem;
  ${({ isValidate }) =>
    isValidate
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
