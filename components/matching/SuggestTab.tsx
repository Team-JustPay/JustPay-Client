import React from 'react';
import styled, { css } from 'styled-components';

interface TabProps {
  options: string[];
  outerFunc?: () => void;
  isClicked?: boolean;
}

interface OptionProps {
  isClicked?: boolean;
}

export default function SuggestTab({ options, outerFunc, isClicked }: TabProps) {
  const handleClickTabOption = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      outerFunc?.();
    }
  };

  return (
    <TabContainer onClick={handleClickTabOption}>
      <Option isClicked={isClicked}>{options[0]}</Option>
      <Option isClicked={!isClicked}>{options[1]}</Option>
    </TabContainer>
  );
}

const TabContainer = styled.section`
  display: flex;
  position: sticky;
  top: 57px;
  z-index: 10;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const Option = styled.div<OptionProps>`
  width: 50%;

  padding-bottom: 1.6rem;

  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: 700;

  text-align: center;

  ${({ isClicked }) =>
    isClicked
      ? css`
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 0.3rem solid ${({ theme }) => theme.colors.white};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray1};
          border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray0};
        `}
`;
