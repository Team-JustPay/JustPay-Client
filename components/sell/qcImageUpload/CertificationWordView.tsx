import React from 'react';
import styled from 'styled-components';

import { useGetCertificationWord } from 'apiHooks/salesPost';
import { useSetRecoilState } from 'recoil';
import { salesPostState } from '../../../recoil/salespost';

export default function CertificationWordView() {
  const putCertifiactionWord = useSetRecoilState(salesPostState);
  const { data, isLoading, error } = useGetCertificationWord();

  React.useEffect(() => {
    if (data) {
      putCertifiactionWord((prev) => ({ ...prev, certificationWord: data?.data.data.certificationWord }));
    }
  }, [data]);

  if (isLoading) return <>로딩중..</>;
  if (error) return <>에러가 발생했습니다</>;
  if (!data) return null;

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
