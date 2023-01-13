import React from 'react';
import styled from 'styled-components';
import { useSetUserLogin } from 'apiHooks/auth';

export default function option() {
  const { mutate: handleClickSellorButton } = useSetUserLogin(4);
  const { mutate: handleClickSuggesterButton } = useSetUserLogin(10);
  return (
    <>
      <GuideText>옵션을 선택해주세요</GuideText>
      <ButtonContainer>
        <Button onClick={() => handleClickSellorButton()}>판매할래요</Button>
        <Button onClick={() => handleClickSuggesterButton()}>구매할래요</Button>
      </ButtonContainer>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}

const GuideText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.colors.white};

  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const ButtonContainer = styled.section`
  position: absolute;
  bottom: 0;

  display: flex;
  gap: 1.2rem;
  width: calc(100% - 3.2rem);

  button:first-child {
    background-color: ${({ theme }) => theme.colors.main_opacity20};
    color: ${({ theme }) => theme.colors.main};
  }

  button:last-child {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button`
  width: calc((100% - 1.2rem) / 2);

  border-radius: 0.8rem;
  padding: 1.5rem 0;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;
