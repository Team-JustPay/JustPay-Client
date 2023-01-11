import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import MyInfoInput from './MyInfoInput';

interface MyInfoSNSContainerProps {
  myfixedInfo: any;
  setMyfixedInfo: Dispatch<SetStateAction<any>>;
}

export default function MyInfoFixSNSContainer({ myfixedInfo, setMyfixedInfo }: MyInfoSNSContainerProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMyfixedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <StyledMyInfoContainer>
        트위터 쪽지{' '}
        <MyInfoInput
          name="twitterMessageUrl"
          onChangeFunc={handleInput}
          text={myfixedInfo.twitterMessageUrl}
          placehoderText="트위터 URL을 입력하세요"
        />
      </StyledMyInfoContainer>
      <StyledMyInfoContainer>
        카카오톡 오픈채팅{' '}
        <MyInfoInput
          name="openChatUrl"
          onChangeFunc={handleInput}
          text={myfixedInfo.openChatUrl}
          placehoderText="카카오톡 오픈채팅 URL을 입력하세요"
        />
      </StyledMyInfoContainer>
    </>
  );
}
const StyledMyInfoContainer = styled.section`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title14pt};
`;
