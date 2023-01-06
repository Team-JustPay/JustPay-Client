import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import { TITLE, MENU } from 'constants/headerMessage';
import layout from './layout';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import DeliveryOptionContainer from 'components/common/DeliveryOptionContainer';
import Router from 'next/router';
export default function deliveryInfo() {
  const handleClickNextButton = () => {
    Router.push('/sell/checkInfo');
  };

  return (
    <>
      <div>
        <Header isHavingBackButton title={TITLE.ADD_SELLPOST} rightButtonText={MENU.CANCEL} />
        <TitleText>
          <MainText text="배송 가능 옵션을 선택하세요" />
          <SubText text="선택하신 옵션 중 하나를 구매자가 고를거에요" isMainColor={false} />
        </TitleText>
        <DeliveryOptionContainer />
      </div>

      <BigButton isDisabled={false} text="다음" onClick={handleClickNextButton} />
    </>
  );
}

deliveryInfo.Layout = layout;
const Root = styled.div``;
