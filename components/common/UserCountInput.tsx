import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}

interface InputTextProps {
  inputText: string;
}

export default function UserCountInput({ placeholder, inputTextGuide, onChangeFunc, inputText }: InputProps) {
  return (
    <InputContainer>
      <GlobalStyledInput placeholder={placeholder} onChange={onChangeFunc} value={inputText} type="number" />
      <InputText inputText={inputText}>{inputTextGuide}</InputText>
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const GlobalStyledInput = styled.input`
  width: 100%;
  padding: 2rem;

  color: ${({ theme }) => theme.colors.main};
  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
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
`;
