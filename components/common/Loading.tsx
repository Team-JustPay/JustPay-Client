import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// import LoadingGIF from '../../public/assets/icons/loading2.gif';

export default function loading() {
  return <LoadingContainer>{/* <Image src={LoadingGIF} alt="로딩중 컴포넌트" /> */}</LoadingContainer>;
}

const LoadingContainer = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
