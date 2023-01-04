import Header from 'components/common/Header';
import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

export default function certification() {
  const [openHelpModal, setOpenHelpModal] = useState<boolean>(false);

  const handleOpenHelpModal = () => {
    setOpenHelpModal(!openHelpModal);
  };

  return (
    <>
      <Header
        title="인증 사진"
        leftButtonText="닫기"
        rightButtonText="도움"
        handleLeftButton={() => Router.push(`/sell/post/${1}`)}
        handleRightButton={handleOpenHelpModal}></Header>
      {openHelpModal && (
        <StyledHelpModalBackground>
          <StyledHelpModal>
            <h1>필요한 인증 사진이 없나요?</h1>
            <p>
              필요한 인증 사진을 판매자가 올려 놓지 않은 경우,
              <br /> 트위터를 통해 추가 인증사진을 요청하세요
              <br />
              인증 사진이 없다면 안전한 거래를 보장할 수 없어요
            </p>
            <StyledClosedHelpModal onClick={handleOpenHelpModal}>확인</StyledClosedHelpModal>
          </StyledHelpModal>
        </StyledHelpModalBackground>
      )}
    </>
  );
}

const StyledHelpModalBackground = styled.div`
  display: flex;
  align-items: center;

  width: 43rem;
  min-height: calc(var(--vh) * 100);

  position: fixed;
  top: 0;
  margin-left: -16px;
  padding: 0 1.6rem 3.2rem;

  background: rgba(0, 0, 0, 0.7);
`;

const StyledHelpModal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24rem;
  padding: 3.2rem 4rem;
  background: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;

  h1 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title16pt};
  }

  p {
    text-align: center;

    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.regular14pt};
  }
`;

const StyledClosedHelpModal = styled.button`
  width: 12rem;
  height: 4.3rem;

  background: ${({ theme }) => theme.colors.main};
  border-radius: 0.8rem;
`;
