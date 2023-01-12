import React from 'react';
import styled from 'styled-components';

interface MyInfoInputProps {
  name?: string;
  placehoderText: string;
  searchButton?: boolean;
  text?: string | number;
  value?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInfoInput({
  name,
  placehoderText,
  value,
  searchButton,
  text,
  onChangeFunc,
}: MyInfoInputProps) {
  return (
    <InputContainer>
      <StyledInput name={name} placeholder={placehoderText} value={value} defaultValue={text} onChange={onChangeFunc} />
      {searchButton && <SearchButton> 검색</SearchButton>}
    </InputContainer>
  );
}

const InputContainer = styled.article`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 2rem;
  margin-top: 1.2rem;

  color: ${({ theme }) => theme.colors.main};
  border: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray_background};
  ${({ theme }) => theme.fonts.regular16pt};

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

const SearchButton = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 39px;
  height: 24px;

  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.main_opacity20};
  ${({ theme }) => theme.fonts.regular12pt};
  border-radius: 0.3rem;
`;
