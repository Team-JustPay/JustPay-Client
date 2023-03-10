import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import ToastMessage from 'components/common/ToastMessage';
import styled from 'styled-components';
import layout from './layout';
import Header from 'components/common/Header';
import LinkIcon from '../../public/assets/icons/linkIcon.svg';
import LinkIconColor from '../../public/assets/icons/linkIcon=color.svg';
import TwitterIcon from '../../public/assets/icons/twitterIcon.svg';
import CompletePostWrite from '../../public/assets/icons/completePostWrite.svg';
import Router from 'next/router';

export default function postWrite() {
  const router = useRouter();
  const { salesPostId } = router.query;
  const [openCopyLinkModal, setOpenCopyLinkModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyLink = () => {
    setOpenCopyLinkModal(true);
    setIsCopied(true);
    setTimeout(() => {
      setOpenCopyLinkModal(false);
    }, 2000);
  };

  const uploadOnTwitter = () => {};

  const handleShowPostDetail = () => {
    Router.push({
      pathname: `/sell/post/${salesPostId}`,
      query: { salesPostId: salesPostId },
    });
  };
  return (
    <>
      <div>
        <Header title="판매글 등록 완료" />
        <StyledCertigfyInfoConatiner>
          <MainText text="판매글 공유하기" />
          <SubText text="트위터로 공유하여 판매글을 홍보하세요" isMainColor={false} />
        </StyledCertigfyInfoConatiner>
        <StyledIconContainer>
          {isCopied ? <LinkIconColor /> : <LinkIcon onClick={handleCopyLink} />}
          <TwitterIcon onClick={uploadOnTwitter} />
        </StyledIconContainer>
        <StyledCompleteIcon>
          <CompletePostWrite />
        </StyledCompleteIcon>
      </div>
      <StyledButtomConatiner>
        {openCopyLinkModal && <ToastMessage text="클립보드에 복사되었어요" />}
        <BigButton text="판매글 본문 보기" isDisabled={false} onClick={handleShowPostDetail} />
      </StyledButtomConatiner>
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

const StyledButtomConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
