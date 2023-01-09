import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import UserProfile from 'components/common/UserProfile';
import DealInfoContainer from 'components/profile/MySellInfoContainer';
import MainText from 'components/common/MainText';
import TitleText from 'components/common/TitleText';
import KakaoOn from '../../public/assets/icons/profile/kakaoOn.svg';
import KakaoOff from '../../public/assets/icons/profile/kakaoOff.svg';
import TwitterOn from '../../public/assets/icons/profile/twitterOn.svg';
import TwitterOff from '../../public/assets/icons/profile/twitterOff.svg';

import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, error, data } = useQuery([id], () => axios.get(API_URL).then(({ data }) => data.data));

  const API_URL = `https://api.just-pay.site/users/${id}`;

  if (isLoading) return <Root>로딩중..</Root>;
  if (error) return <Root>에러가 발생했습니다</Root>;
  if (!data) return null;

  const moveToPrevPage = () => {
    router.back();
  };

  return (
    <Root>
      <Header title="판매자 프로필" leftButtonText="닫기" handleLeftButton={moveToPrevPage} />
      <UserProfile profileImageUrl={data.profileImageUrl} nickname={data.nickName} socialId={data.socialId} />

      <MainText text="판매 정보" />
      <br />
      <br />
      <DealInfoContainer dealCount={data.dealCount} saleMoney={data.saleMoney} saleCount={data.saleCount} isSale />

      <TitleText>
        <MainText text="구매 정보" />
      </TitleText>
      <DealInfoContainer
        dealCount={data.dealCount}
        saleMoney={data.purchaseMoney}
        saleCount={data.purchaseCount}
        isPurchase
      />
      <TitleText>
        <MainText text="연락처" />
      </TitleText>
      <StyledContactContainer>
        {data.twitterMessageUrl === '' ? (
          <StyledContact>
            <TwitterOff />
            <StyledContactName>트위터 쪽지</StyledContactName>
          </StyledContact>
        ) : (
          <StyledContact href={`https://${data.twitterMessageUrl}`}>
            <TwitterOn />
            <StyledContactName>트위터 쪽지</StyledContactName>
          </StyledContact>
        )}

        {data.openChatUrl === '' ? (
          <StyledContact>
            <KakaoOff />
            <StyledContactName>오픈채팅</StyledContactName>
          </StyledContact>
        ) : (
          <StyledContact href={`https://${data.openChatUrl}`}>
            <KakaoOn />
            <StyledContactName>오픈채팅</StyledContactName>
          </StyledContact>
        )}
      </StyledContactContainer>
    </Root>
  );
}

const Root = styled.div``;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const StyledContactName = styled.p`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fonts.regular12pt};
  color: ${({ theme }) => theme.colors.gray3};
`;

const StyledContact = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2rem;
`;
