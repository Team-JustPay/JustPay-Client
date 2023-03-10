import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}

export default function UserInput({ placeholder, onChangeFunc, inputText }: InputProps) {
  return (
    <InputContainer>
      <GlobalStyledInput placeholder={placeholder} onChange={onChangeFunc} value={inputText} type="text" />
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
