import React, { useState } from 'react';
import Router from 'next/router';

import FirstGuidePic from '../../public/assets/icons/guide1.svg';
import SecondGuidePic from '../../public/assets/icons/guide2.svg';
import ThirdGuidePic from '../../public/assets/icons/guide3.svg';

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
import TextContainer from 'components/sell/guide/TextContainer';

export default function guide() {
  const [stage, setStage] = useState(1);
  const handleClickNextButton = () => {
    if (stage !== 3) {
      setStage((prev) => prev + 1);
    } else {
      Router.push('/sell/option');
    }
  };

  const stageRender = () => {
    switch (stage) {
      case 1:
        return (
          <ContentsContainer>
            <FirstGuidePic />
            <TextContainer>
              <GuideText>여러 상품을 한 번에 업로드하는 경우,</GuideText>
              <GuideText>모든 상품이 최대한 잘 구분되도록 촬영해주세요</GuideText>
            </TextContainer>
          </ContentsContainer>
        );
      case 2:
        return (
          <ContentsContainer>
            <SecondGuidePic />
            <TextContainer>
              <GuideText>원하는 가격이 있다면 판매하는 상품의 가격을 </GuideText>
              <GuideText>사진 위에 표시해주세요 (없어도 OK!)</GuideText>
            </TextContainer>
          </ContentsContainer>
        );
      case 3:
        return (
          <ContentsContainer>
            <ThirdGuidePic />
            <TextContainer>
              <GuideText>판매하지 않을 포카를 제외하고 사진을 촬영하거나,</GuideText>
              <GuideText>알아볼 수 있도록 사진 위에 표시를 해주세요!</GuideText>
            </TextContainer>
          </ContentsContainer>
        );
      default:
        return;
    }
  };

  return (
    <>
      <div>
        <Header
          title="판매글 작성하기"
          isHavingBackButton={true}
          rightButtonText="취소"
          handleLeftButton={() => Router.back()}
        />
        <TitleText>
          <MainText text="판매글에 보일 대표 사진을 등록해주세요" />
          <SubText text="판매하는 상품이 전부 보이는 1장의 사진을 등록해주세요" isMainColor={false} />
        </TitleText>
        <GuideContainer>
          <Progress stage={stage} final={3} />
          {stageRender()}
        </GuideContainer>
      </div>
      <BigButton text="다음" isDisabled={false} onClick={handleClickNextButton} />
    </>
  );
}

guide.Layout = layout;
