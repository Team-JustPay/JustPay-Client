import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

  const moveToPrevPage = () => {
    router.back();
  };

  return (
    <Root>
      <Header title="판매자 프로필" leftButtonText="닫기" handleLeftButton={moveToPrevPage} />
    </Root>
  );
}

const Root = styled.div``;
