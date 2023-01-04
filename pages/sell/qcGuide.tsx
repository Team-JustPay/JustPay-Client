import React, { useState } from 'react';
import Router from 'next/router';

import FirstQCGuidePic from '../../public/assets/icons/qcGuide1.svg';
import SecondQCGuidePic from '../../public/assets/icons/qcGuide2.svg';

import { TITLE, MENU } from 'constants/headerMessage';
import Header from 'components/common/Header';
import GuideContainer from 'components/sell/guide/GuideContainer';
import Progress from 'components/sell/guide/Progress';
import ContentsContainer from 'components/sell/guide/ContentsContainer';
import { GuideText } from 'components/sell/guide/GuideText';
import BigButton from 'components/common/BigButton';
import layout from './layout';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import TextContainer from 'components/sell/guide/TextContainer';

export default function qcGuide() {
  const [stage, setStage] = useState(1);
  const handleClickNextButton = () => {
    if (stage !== 2) {
      setStage((prev) => prev + 1);
    } else {
      Router.push('/sell/qcImageUpload');
    }
  };

  const stageRender = () => {
    switch (stage) {
      case 1:
        return (
          <ContentsContainer>
            <FirstQCGuidePic />
            <TextContainer>
              <GuideText>자신의 아이디와 인증단어를 적어 상품과 함께 촬영해주세요</GuideText>
              <GuideText>구매자가 인증사진을 확인하고 결제하면 간편하게거래 완료!</GuideText>
            </TextContainer>
          </ContentsContainer>
        );
      case 2:
        return (
          <ContentsContainer>
            <SecondQCGuidePic />
            <TextContainer>
              <GuideText>포스트잇이 상품을 가리지 않게 놓아주세요</GuideText>
              <GuideText>상품 상태(긁힘, 찢김 등)가 자세히 보이도록 촬영해주세요!</GuideText>
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
        <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.CANCEL} isHavingBackButton />
        <TitleText>
          <MainText text="인증 전용 사진을 추가로 등록해주세요"></MainText>
          <SubText text="매칭된 구매자에게만 보일 인증 사진을 등록해주세요"></SubText>
        </TitleText>
        <GuideContainer>
          <Progress stage={stage} final={2} />
          {stageRender()}
        </GuideContainer>
      </div>
      <BigButton text="다음" isDisabled={false} onClick={handleClickNextButton} />
    </>
  );
}

qcGuide.Layout = layout;
