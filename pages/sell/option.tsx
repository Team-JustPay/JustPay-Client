import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import layout from './layout';
import Header from 'components/common/Header';
import TitleText from 'components/common/TitleText';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import ImagePostButton from 'components/common/ImagePostButton';
import TwoOptionContainer from 'components/common/TwoOptionContainer';
import BigButton from 'components/common/BigButton';
import UserInput from 'components/common/UserInput';

export default function option() {
  const [isPosted, setIsPosted] = useState(true);
  const [inputText, setInputText] = useState('');

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  return (
    <>
      <div>
        <Header title="판매글 작성하기" isHavingBackButton={true} rightButtonText="취소" />
        <TitleText>
          <MainText text="판매글에 보일 대표 사진을 등록해주세요" />
          <SubText text="판매하는 상품이 전부 보이는 1장의 사진을 등록해주세요" />
        </TitleText>
        <ImagePostButton buttonSize="big" />
        {isPosted && (
          <OptionContainer>
            <MainText text="이 사진 중에서 몇 개를 파실 건가요?" />
            <InputContainer>
              <UserInput
                placeholder="정확한 상품의 개수를 입력해주세요"
                inputTextGuide="개"
                onChangeFunc={handleInput}
                inputText={inputText}
              />
            </InputContainer>
            {inputText !== '1' && inputText && (
              <TwoOptionContainer
                firstOption="일괄 판매만"
                secondOption="일괄 + 일부"
                firstOptionGuide="1명만 구매할 수 있어요"
                secondOptionGuide="1명이 일괄 구매 하거나, 여러 명이 구매할 수 있어요"
              />
            )}
          </OptionContainer>
        )}
      </div>
      <BigButton text="다음" isDisabled={inputText !== '1'} onClick={() => console.log('hi')} />
    </>
  );
}

const OptionContainer = styled.section`
  margin-top: 4rem;
`;

const InputContainer = styled.section`
  margin: 2.4rem 0 1.2rem;
`;

option.Layout = layout;
