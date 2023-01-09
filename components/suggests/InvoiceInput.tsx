import React from 'react';
import styled from 'styled-components';

interface InputProps {
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InvoiceInput({ onChangeFunc }: InputProps) {
  return <StyledInput placeholder="영수증 번호를 입력하세요(-제외)" onChange={onChangeFunc} />;
}

const StyledInput = styled.input`
  width: 100%;

  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray_background};
  color: ${({ theme }) => theme.colors.main};

  font-weight: 700;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;
