import React, { useState } from 'react';
import styled from 'styled-components';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import SmallButton from 'components/common/SmallButton';
import UserInput from 'components/common/UserInput';
import CheckRadio from 'components/common/CheckRadio';
import BigButton from 'components/common/BigButton';
import layout from './layout';

export default function selectPrice() {
  const PriceOption = {
    OfferPrice: {
      isAble: true,
      info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
      inputTitle: '판매 가격을 입력하세요',
      checkText: '최소 판매 가격은 수정할 수 없어요',
    },
    LimitPrice: {
      isAble: false,
      info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
      inputTitle: '최소 판매 가격을 입력하세요',
      checkText: '판매 가격은 수정할 수 없어요',
    },
  };

  const [currentPriceOption, setCurrentPriceOption] = useState(PriceOption.OfferPrice);
  const handlePriceOption = () => {
    // 버튼 컬러 켜지고 꺼지게
    // currentPriceOption 에 들어갈 선택자
  };

  return (
    <>
      <div>
        <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.BACK} isHavingBackButton />
        <TitleText>
          <MainText text="n개의 상품을 판매하시는군요!"></MainText>
          <SubText text="원하는 가격 옵션을 설정하세요" isMainColor={false}></SubText>
        </TitleText>
        <SmallButton
          text="가격 제시받기"
          isDisabled={PriceOption.OfferPrice.isAble}
          onClick={handlePriceOption}></SmallButton>
        <SmallButton
          text="지정가격에만 팔기"
          isDisabled={PriceOption.LimitPrice.isAble}
          onClick={handlePriceOption}></SmallButton>
        <SubText text={currentPriceOption.info} isMainColor={true}></SubText>
        <MainText text={currentPriceOption.inputTitle}></MainText>
        <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
        <StyledCheckBox>
          <CheckRadio />
          <SubText text={currentPriceOption.checkText} isMainColor={false}></SubText>
        </StyledCheckBox>
      </div>
      <BigButton text="다음" isDisabled={false} onClick={() => {}}></BigButton>
    </>
  );
}

const StyledCheckBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

selectPrice.Layout = layout;
