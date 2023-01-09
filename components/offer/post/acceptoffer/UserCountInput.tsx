import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  placeholder: string;
  inputTextGuide: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  countOverCheck: boolean;
}

interface StyledInputProps {
  countOverCheck: boolean;
  value: string;
}

interface InputTextProps {
  inputText: string;
  countOverCheck: boolean;
}

export default function UserCountInput({
  placeholder,
  inputTextGuide,
  onChangeFunc,
  inputText,
  countOverCheck,
}: InputProps) {
  return (
    <InputContainer>
      <StyledInput
        countOverCheck={countOverCheck}
        placeholder={placeholder}
        onChange={onChangeFunc}
        value={inputText}
        type="text"
      />
      <InputText inputText={inputText} countOverCheck={countOverCheck}>
        {countOverCheck && inputText !== '' ? '5일 까지 입력할 수 있어요' : inputTextGuide}
      </InputText>
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 2rem;

  color: ${({ theme, countOverCheck }) => (countOverCheck ? theme.colors.sub2 : theme.colors.main)};
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border: 0.2rem solid;
    border-color: ${({ theme, countOverCheck }) => (countOverCheck ? theme.colors.sub2 : theme.colors.main)};
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
  ${({ countOverCheck, inputText }) =>
    countOverCheck && inputText !== ''
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
