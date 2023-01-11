import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDeleteSuggests } from 'apiHooks/suggests';

import Header from 'components/common/Header';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import SmallButton from 'components/sell/post/denyoffer/SmallButton';
import BigButton from 'components/common/BigButton';
import UserInput from 'components/offer/buy/common/UserDescriptionInput';

export default function denyoffer() {
  const router = useRouter();
  const { id } = router.query;
  const { mutate: handleClickCancelButton } = useDeleteSuggests(Number(id));
  const [currentUserChoice, setCurrentUserChoice] = useState('');

  const [button, setButton] = useState([
    {
      option: '상품이 판매됐어요',
      id: 1,
    },
    {
      option: '일부가 판매됐어요',
      id: 2,
    },
    {
      option: '기타 사유',
      id: 3,
    },
  ]);

  const moveToPrevPage = () => {
    router.back();
  };

  return (
    <Root>
      <Header
        isHavingBackButton
        title="제시 거절하기"
        rightButtonText="취소"
        handleLeftButton={moveToPrevPage}
        handleRightButton={moveToPrevPage}
      />
      <TitleText>
        <MainText text="거절 사유를 알려주세요" />
        <SubText text="상품이 모두 판매되었을 경우, 판매 종료하기를 누르면" isMainColor={false} />
        <SubText text="더 이상 제시 받을 수 없어요" isMainColor={false} />
      </TitleText>

      <StyledButtonWrapper>
        {button.map((button) => (
          <SmallButton
            text={button.option}
            key={button.id}
            onClick={() => setCurrentUserChoice(button.option)}
            currentUserChoice={currentUserChoice}
          />
        ))}
      </StyledButtonWrapper>
      {currentUserChoice !== '상품이 판매됐어요' && currentUserChoice !== '' && (
        <>
          <TitleText>
            <MainText text="남길 메세지(선택사항)" />
            <SubText text="구매자에게 전달하고 싶은 메세지를 남겨주세요" isMainColor={false} />
          </TitleText>
          <UserInput
            placeholder="a, b, c 중에서 a는 품절이에요"
            inputTextGuide=""
            onChangeFunc={() => {}}
            inputText={''}
          />
        </>
      )}
      <BigButton
        text="제시 거절하기"
        onClick={() => {
          handleClickCancelButton();
          router.push(`/matching/${Number(id)}`);
        }}
        isDisabled={currentUserChoice === '' ? true : false}
      />
    </Root>
  );
}

const Root = styled.div``;

const StyledButtonWrapper = styled.div``;
