import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import BigButton from 'components/common/BigButton';
import ImagePostButton from 'components/common/ImagePostButton';
import UserInput from 'components/common/UserInput';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import SmallButton from 'components/common/SmallButton';

export default function buy() {
  return (
    <Root>
      <Header title={TITLE.OFFER_TO_SELLER} rightButtonText={MENU.BACK} isHavingBackButton />
      <ImagePostButton buttonSize="small" />
      <MainText text="구매하는 가격을 확인하세요" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <MainText text="배송가능 옵션 을 1가지만 선택하세요" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />

      <TitleText>
        <MainText text="구매 희망 상품을 표시한 사진을 등록해주세요" />
        <SubText text="일괄 구매하는 경우에는 표시하지 않아도 돼요" />
      </TitleText>

      <ImagePostButton buttonSize="big" />

      <SmallButtonContainer>
        <SmallButton text="일괄 구매" onClick={() => {}} isDisabled={false} />
        <SmallButton text="일부 구매" onClick={() => {}} isDisabled={true} />
      </SmallButtonContainer>

      <MainText text="구매 희망가격을 제시하세요"></MainText>
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <MainText text="배송가능 옵션 을 1가지만 선택하세요" />

      <TitleText>
        <MainText text="구매 희망 상품을 표시한 사진을 등록해주세요" />
        <SubText text="일괄 구매하는 경우에는 표시하지 않아도 돼요" />
      </TitleText>

      <ImagePostButton buttonSize="big" />

      <SmallButtonContainer>
        <SmallButton text="일괄 구매" onClick={() => {}} isDisabled={true} />
        <SmallButton text="일부 구매" onClick={() => {}} isDisabled={false} />
      </SmallButtonContainer>

      <MainText text="구매 희망 상품의 개수를 입력하세요"></MainText>
      <UserInput placeholder="정확한 상품의 개수를 입력해주세요" inputTextGuide="개" />

      <TitleText>
        <MainText text="판매자에게 제시 옵션을 한줄로 설명해주세요" />
        <SubText text="표시한 포카 4장 구매원함, 마크 셀포 브이 1장 구매," />
      </TitleText>
      <SubText text="핑크색머리 천러 중복 3장 등 이해하기 쉽게 설명해주세요" />

      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />

      <MainText text="구매 희망가격을 제시하세요"></MainText>
      <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      <MainText text="배송가능 옵션 을 1가지만 선택하세요" />

      <BigButton text="다음" isDisabled={true} onClick={() => {}} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;
