import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Header from '../../../../components/common/Header';
import BigButton from 'components/common/BigButton';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import UserCountInput from 'components/offer/post/acceptoffer/UserCountInput';
import { useRouter } from 'next/router';

export default function () {
  const [inputCount, setInputCount] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  let countOverCheck = 5 < inputCount || inputCount === 0;

  const handleCountInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
    setInputCount(Number(value));
  }, []);

  const handleClick = () => {
    console.log(inputCount);
  };

  console.log(inputCount);

  const checkVaildInput = () => {
    return inputCount <= 5 && inputCount !== 0 ? true : false;
  };

  return (
    <Root>
      <Header isHavingBackButton title="제시 수락하기" rightButtonText="취소" />
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

      <BigButton text="제시 수락하기" isDisabled={!checkVaildInput()} onClick={handleClick} />
    </Root>
  );
}

const Root = styled.div``;
