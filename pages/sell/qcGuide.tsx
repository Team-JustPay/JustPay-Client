import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';

export default function qcGuide() {
  return (
    <>
      <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.CANCEL} isHavingBackButton />
      <TitleText>
        <MainText text={'인증 전용 사진을 추가로 등록해주세요'}></MainText>
        <SubText text="매칭된 구매자에게만 보일 인증 사진을 등록해주세요"></SubText>
      </TitleText>
    </>
  );
}
