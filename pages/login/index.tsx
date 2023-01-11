import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useSetUserLogin } from 'apiHooks/auth';

import JusyPayLogo from '../../public/assets/icons/justpay_symbol_logo.svg';
import BigButton from 'components/common/BigButton';
import LoginGIF from '../../public/assets/icons/loginneed2.gif';

export default function login() {
  const { mutate } = useSetUserLogin();
  const handleClickLoginButton = () => {
    mutate();
  };
  return (
    <>
      <StyledHeader>
        <JusyPayLogo />
      </StyledHeader>
      <ContentsContainer>
        <GIFContainer>
          <Image src={LoginGIF} alt="로그인 필요 사진" layout="responsive" />
          <GuideText>로그인이 필요해요</GuideText>
        </GIFContainer>
      </ContentsContainer>
      <BigButton text="로그인하기" isDisabled={false} onClick={() => handleClickLoginButton()} />
    </>
  );
}

const StyledHeader = styled.section`
  position: fixed;
  max-width: 43rem;
  top: 0;
  z-index: 10;

  width: 100%;
  padding: 1.95rem 0;

  background-color: ${({ theme }) => theme.colors.gray_background};
`;

const ContentsContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GIFContainer = styled.section`
  position: relative;
  width: 100%;
  height: 39rem;
`;

const GuideText = styled.p`
  margin-top: 1.8rem;

  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;
