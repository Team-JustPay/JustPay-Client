import React from 'react';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import styled from 'styled-components';
import layout from './layout';
import Header from 'components/common/Header';
import LinkIcon from '../../public/assets/icons/linkIcon.svg';
import TwitterIcon from '../../public/assets/icons/twitterIcon.svg';
import CompletePostWrite from '../../public/assets/icons/completePostWrite.svg';
export default function postWrite() {
  const copyLink = () => {};

  const uploadOnTwitter = () => {};
  return (
    <>
      <div>
        <Header title="판매글 등록 완료" />
        <StyledCertigfyInfoConatiner>
          <MainText text="판매글 공유하기" />
          <SubText text="트위터로 공유하여 판매글을 홍보하세요" />
        </StyledCertigfyInfoConatiner>
        <StyledIconContainer>
          <LinkIcon onClick={copyLink} />
          <TwitterIcon onClick={uploadOnTwitter} />
        </StyledIconContainer>
        <StyledCompleteIcon>
          <CompletePostWrite />
        </StyledCompleteIcon>
      </div>
      <BigButton text="판매글 본문 보기" isDisabled={false} onClick={() => {}} />
    </>
  );
}

postWrite.Layout = layout;

const StyledCertigfyInfoConatiner = styled.section`
  & :first-child {
    margin-bottom: 0.8rem;
  }

  & :last-child {
    margin-bottom: 1.3rem;
  }
`;

const StyledIconContainer = styled.section`
  display: flex;

  margin-bottom: 11.7rem;
  cursor: pointer;

  & :first-child {
    margin-right: 1.2rem;
  }
`;

const StyledCompleteIcon = styled.section`
  display: flex;
  justify-content: center;
`;
