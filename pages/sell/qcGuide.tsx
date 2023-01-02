import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import GuideContainer from 'components/sell/guide/GuideContainer';
import Progress from 'components/sell/guide/Progress';
import ContentsContainer from 'components/sell/guide/ContentsContainer';
import { GuideText } from 'components/sell/guide/GuideText';
import FirstQCGuidePic from '../../public/assets/icons/qcGuide1.svg';
import BigButton from 'components/common/BigButton';

export default function qcGuide() {
  return (
    <Root>
      <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.CANCEL} isHavingBackButton />
      <TitleText>
        <MainText text={'인증 전용 사진을 추가로 등록해주세요'}></MainText>
        <SubText text="매칭된 구매자에게만 보일 인증 사진을 등록해주세요"></SubText>
      </TitleText>
      <GuideContainer>
        <Progress stage={1} />
        <ContentsContainer>
          <FirstQCGuidePic />
          <GuideText>
            자신의 아이디와 인증단어를 적어 상품과 함께 촬영해주세요 구매자가 인증사진을 확인하고 결제하면 간편하게 거래
            완료!
          </GuideText>
        </ContentsContainer>
      </GuideContainer>
      <BigButton text="다음" isDisabled={false} onClick={() => {}} />
    </Root>
  );
}

const Root = styled.div``;
