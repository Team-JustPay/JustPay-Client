import React from 'react';
import styled from 'styled-components';
import BigButton from 'components/common/BigButton';
import { useRouter } from 'next/router';
import Error404 from 'public/assets/icons/error404.svg';
import Logo from 'public/assets/icons/justpay_symbol_logo.svg';

export default function Custom404() {
  const router = useRouter();
  const handleClickButton = () => {
    router.push('/login');
  };
  return (
    <Root>
      <StyledHeader>
        <Logo />
      </StyledHeader>
      <Error404 />
      <BigButton text="홈으로 이동하기" isDisabled={false} onClick={handleClickButton} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;

  & > img {
    width: 100%;
    max-width: 43rem;
    height: 100%;
    max-height: 43rem;
  }
`;

const StyledHeader = styled.section`
  position: fixed;
  max-width: 43rem;
  top: 0;
  z-index: 10;

  width: 100%;
  padding: 1.95rem 0;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;
