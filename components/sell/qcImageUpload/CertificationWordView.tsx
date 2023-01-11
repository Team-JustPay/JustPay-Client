import React from 'react';
import styled from 'styled-components';

import { useGetCertificationWord } from 'apiHooks/salesPost';

export default function CertificationWordView() {
  const { data } = useGetCertificationWord();

  return (
    <>
      <StyledCertigfyWordConatiner>
        <h1>인증단어</h1>
        <p>|</p>
        <strong>{data?.data.data.certificationWord}</strong>
      </StyledCertigfyWordConatiner>
    </>
  );
}

const StyledCertigfyWordConatiner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.fonts.medium14pt};
  h1 {
    margin-right: 0.8rem;
  }
  p {
    margin-right: 0.8rem;
  }
  strong {
    color: ${({ theme }) => theme.colors.sub1};
    ${({ theme }) => theme.fonts.title16pt};
  }
`;
