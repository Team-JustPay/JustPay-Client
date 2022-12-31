import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
}

export default function UserInput({ placeholder }: InputProps) {
  return (
    <InputContainer>
      <GlobalStyledInput placeholder={placeholder} />
      <InputText>개</InputText>
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const GlobalStyledInput = styled.input`
  width: 100%;
  padding: 2rem;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};

    & + strong {
      color: ${({ theme }) => theme.colors.main};
      font-weight: 700;
    }
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const InputText = styled.strong`
  position: absolute;
  top: 2rem;
  right: 2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;

  color: ${({ theme }) => theme.colors.gray1};
`;
