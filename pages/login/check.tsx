import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useGetmyInfo } from 'apiHooks/user';

import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import LoginSuccessGIF from '../../public/assets/icons/loginsuccess2.gif';

export default function check() {
  const { data: myInfo } = useGetmyInfo(true);
  console.log(myInfo);
  return (
    <>
      <Header title="트위터로 로그인하기" />
      <ContentsContainer>
        <GIFContainer>
          <Image src={LoginSuccessGIF} alt="로그인 필요 사진" layout="responsive" />
          <GuideText>로그인 성공!</GuideText>
        </GIFContainer>
      </ContentsContainer>
      <BigButton text={myInfo?.data.data.shippingInfo ? '닫기' : '배송지 정보 입력하기'} isDisabled={false} />
    </>
  );
}

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
