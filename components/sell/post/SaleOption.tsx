import React from 'react';
import styled from 'styled-components';

interface SaleOptionProps {
  optionName: string;
  optionTitle: number | string;
}
export default function SaleOption({ optionName, optionTitle }: SaleOptionProps) {
  return (
    <Root>
      <h1>{optionName}</h1>
      <p>{optionTitle}</p>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);
  border-right: 1px solid ${({ theme }) => theme.colors.gray0};

  h1 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.regular12pt};
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.regular14pt};
  }
`;
