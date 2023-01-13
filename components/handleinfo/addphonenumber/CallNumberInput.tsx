import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  name?: string;
  placeholder: string;
  inputTextGuide?: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText?: string;
  phoneNumber: string;
  text?: string;
}

interface InputTextProps {
  name: string | undefined;
  inputText?: string;
  phoneNumber: string;
  isValidForm: boolean;
}

export default function CallNumberInput({
  name,
  placeholder,
  inputTextGuide,
  onChangeFunc,
  inputText,
  phoneNumber,
  text,
}: InputProps) {
  const regex = /^(010)[0-9]{4}[0-9]{4}$/;
  const isValidForm = regex.test(phoneNumber) || phoneNumber.length === 0;

  return (
    <InputContainer>
      <GlobalStyledInput
        name={name}
        placeholder={placeholder}
        onChange={onChangeFunc}
        value={inputText}
        type="number"
        phoneNumber={phoneNumber}
        isValidForm={isValidForm}
        defaultValue={text}
      />
      <InputText name={name} inputText={inputText} phoneNumber={phoneNumber} isValidForm={isValidForm}>
        {isValidForm ? inputTextGuide : '형식에 맞게 입력해주세요'}
      </InputText>
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const GlobalStyledInput = styled.input<InputTextProps>`
  width: 100%;
  padding: 2rem;

  color: ${({ theme, isValidForm }) => (isValidForm ? theme.colors.main : theme.colors.sub2)};
  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-top: ${({ name }) => name === 'phoneNumber' && ' 1.2rem'};

  &:focus {
    border-color: ${({ theme, isValidForm }) => (isValidForm ? theme.colors.main : theme.colors.sub2)};
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
  top: ${({ name }) => (name === 'phoneNumber' ? '3rem' : '2rem')};

  right: 2rem;

  color: ${({ inputText }) => (inputText ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.gray1)};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;

  ${({ isValidForm }) =>
    isValidForm
      ? css`
          font-size: 1.6rem;
          line-height: 1.9rem;
        `
      : css`
          font-size: 1.2rem;
          line-height: 1.4rem;
          margin-top: 0.4rem;
          color: ${({ theme }) => theme.colors.sub2} !important;
        `}
`;
