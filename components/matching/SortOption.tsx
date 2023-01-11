import React from 'react';
import styled from 'styled-components';

interface OptionProps {
  optionText: string;
  optionNum: number;
}

export default function SortOption({ optionText, optionNum }: OptionProps) {
  return (
    <OptionContainer>
      <OptionNumText>
        {optionText} {optionNum}건
      </OptionNumText>
      <SortOptionText>높은 가격 순</SortOptionText>
    </OptionContainer>
  );
}

const OptionContainer = styled.section`
  display: flex;
  justify-content: space-between;

  font-size: 1.2rem;
  line-height: 1.4rem;

  width: 100%;

  padding: 2rem 0 1.2rem;

  display: flex;
  position: sticky;
  top: 94px;
  z-index: 10;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const OptionNumText = styled.p`
  color: ${({ theme }) => theme.colors.main};
`;

const SortOptionText = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
`;
