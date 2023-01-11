import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useSetSuggestState } from 'apiHooks/suggests';

import Header from '../../../../components/common/Header';
import BigButton from 'components/common/BigButton';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import UserCountInput from 'components/offer/post/acceptoffer/UserCountInput';
import { useRouter } from 'next/router';

export default function () {
  const [inputCount, setInputCount] = useState('');
  const router = useRouter();
  const { id } = router.query;

  const { mutate: handleClickAcceptButton } = useSetSuggestState(Number(id), 1, Number(inputCount));

  let countOverCheck = 5 < Number(inputCount) || Number(inputCount) === 0;

  const handleCountInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    setInputCount(value);
  }, []);

  //TODO: 페이지 합치고 라우팅 경로 수정
  const acceptOffer = () => {
    handleClickAcceptButton();
    router.push(`/matching/${Number(id)}`);
  };
  const moveToPrevPage = () => {
    router.push(`/offer/post/${Number(id)}`);
  };

  const checkVaildInput = () => {
    return Number(inputCount) <= 5 && Number(inputCount) !== 0 ? true : false;
  };

  return (
    <Root>
      <Header isHavingBackButton title="제시 수락하기" rightButtonText="취소" handleLeftButton={moveToPrevPage} />
      <TitleText>
        <MainText text="운송장 입력 기한을 입력하세요" />
        <SubText text="입력한 날이 지나면 구매자가 구매를 취소할 수 있어요" isMainColor={false} />
      </TitleText>
      <UserCountInput
        placeholder="최대 5일까지 입력해주세요"
        inputTextGuide="일"
        onChangeFunc={handleCountInput}
        inputText={inputCount + ''}
        countOverCheck={countOverCheck}
      />

      <BigButton text="제시 수락하기" isDisabled={!checkVaildInput()} onClick={acceptOffer} />
    </Root>
  );
}

const Root = styled.div``;
