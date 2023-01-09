import React from 'react';
import styled from 'styled-components';

interface MyInfoInputProps {
  placehoderText: string;
  searchButton?: boolean;
  text?: string | number;
}
export default function MyInfoInput({ placehoderText, searchButton, text }: MyInfoInputProps) {
  return (
    <InputContainer>
      <StyledInput placeholder={placehoderText} value={text} />
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
  border-radius: 0.3rem;
`;
