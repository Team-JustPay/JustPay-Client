import React from 'react';
import styled from 'styled-components';
interface MyInfoItemProps {
  title: string;
  content: string;
}

export default function MyInfoItem({ title, content }: MyInfoItemProps) {
  return (
    <Root>
      <h1>{title}</h1>
      {content !== '' ? <p>{content}</p> : <p>-</p>}
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.title14pt};

  P {
    width: 22rem;
    word-break: break-all;
    text-align: right;

    ${({ theme }) => theme.fonts.title16pt};
  }
`;
