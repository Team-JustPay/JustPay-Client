import React, { useState } from 'react';
import styled from 'styled-components';

import MainText from 'components/common/MainText';
import TitleText from 'components/common/TitleText';
import SubText from 'components/common/SubText';
import Header from 'components/common/Header';
import CallNumberInput from 'components/handleinfo/addphonenumber/CallNumberInput';
import NumberValidateInput from 'components/handleinfo/addphonenumber/NumberVaildateInput';
import BigButton from 'components/common/BigButton';
import Router from 'next/router';

export default function Addphonenumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validateNumber, setValidateNumber] = useState('');

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeValidateNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidateNumber(e.target.value);
  };

  const checkValidation = () => {
    if (phoneNumber.length !== 0) {
      return checkValidForm() && checkMatchNumber() ? true : false;
    }
  };

  const checkValidForm = () => {
    return /^(010|011|016|017|018|019)[0-9]{3,4}[0-9]{4}$/.test(phoneNumber);
  };

  const checkMatchNumber = () => {
    return Number(phoneNumber) === Number(validateNumber);
  };

  const query = { phone: String(phoneNumber) };

  const moveToNextPage = () => {
    Router.push({ pathname: '/handleinfo/adddelivery', query });
  };

  return (
    <Root>
      <Header title="전화번호 등록" />
      <TitleText>
        <MainText text="전화번호를 입력하세요" />
        <SubText text="꼭 필요한 순간에 푸시알림을 드릴게요" isMainColor={false} />
        <SubText text="택배사 정책상 전화번호를 알아야만 택배를 보낼 수 있어요" isMainColor={false} />
        <CallNumberInput
          placeholder="전화번호를 입력하세요 (- 제외)"
          inputText={phoneNumber}
          inputTextGuide=""
          onChangeFunc={handleChangePhoneNumber}
          phoneNumber={phoneNumber}
        />
      </TitleText>
      <TitleText>
        <MainText text="전화번호를 재입력해서 확인" />
      </TitleText>
      <NumberValidateInput
        placeholder="전화번호를 입력하세요 (- 제외)"
        inputText={validateNumber}
        inputTextGuide="전화번호가 일치하지 않아요"
        onChangeFunc={handleChangeValidateNumber}
        validateInput={phoneNumber}
      />
      <BigButton text="전화번호 등록" isDisabled={!checkValidation()} onClick={moveToNextPage} />
    </Root>
  );
}

const Root = styled.div``;
