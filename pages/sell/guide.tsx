import React from 'react';

import FirstGuidePic from '../../public/assets/icons/guide1.svg';

import layout from './layout';
import Header from 'components/common/Header';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import GuideContainer from 'components/sell/guide/GuideContainer';
import Progress from 'components/sell/guide/Progress';
import ContentsContainer from 'components/sell/guide/ContentsContainer';
import { GuideText } from 'components/sell/guide/GuideText';
import BigButton from 'components/common/BigButton';
import UserInput from 'components/common/UserInput';

export default function guide() {
  return (
    <>
      <div>
        <Header title="판매글 작성하기" isHavingBackButton={true} rightButtonText="취소" />
        <TitleText>
          <MainText text="판매글에 보일 대표 사진을 등록해주세요" />
          <SubText text="판매하는 상품이 전부 보이는 1장의 사진을 등록해주세요" />
        </TitleText>
        <GuideContainer>
          <Progress stage={1} />
          <ContentsContainer>
            <FirstGuidePic />
            <GuideText>여러 상품을 한 번에 업로드하는 경우, 모든 상품이 최대한 잘 구분되도록 촬영해주세요</GuideText>
          </ContentsContainer>
        </GuideContainer>
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
        <UserInput placeholder="하이" inputTextGuide="바이" />
      </div>
      <BigButton text="다음" isDisabled={false} onClick={() => console.log('hi')} />
    </>
  );
}

guide.Layout = layout;
