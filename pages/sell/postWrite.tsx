import React, { useState } from 'react';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import styled from 'styled-components';
import layout from './layout';
import Header from 'components/common/Header';
import LinkIcon from '../../public/assets/icons/linkIcon.svg';
import LinkIconColor from '../../public/assets/icons/linkIcon=color.svg';
import TwitterIcon from '../../public/assets/icons/twitterIcon.svg';
import CompletePostWrite from '../../public/assets/icons/completePostWrite.svg';
export default function postWrite() {
  const [openCopyLinkModal, setOpenCopyLinkModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const copyLink = () => {
    setOpenCopyLinkModal(true);
    setIsCopied(true);
    setTimeout(() => {
      setOpenCopyLinkModal(false);
    }, 2000);
  };

  const uploadOnTwitter = () => {};
  return (
    <>
      <div>
        <Header title="판매글 등록 완료" />
        <StyledCertigfyInfoConatiner>
          <MainText text="판매글 공유하기" />
          <SubText text="트위터로 공유하여 판매글을 홍보하세요" isMainColor={false} />
        </StyledCertigfyInfoConatiner>
        <StyledIconContainer>
          {isCopied ? <LinkIconColor /> : <LinkIcon onClick={copyLink} />}
          <TwitterIcon onClick={uploadOnTwitter} />
        </StyledIconContainer>
        <StyledCompleteIcon>
          <CompletePostWrite />
        </StyledCompleteIcon>
      </div>
      <StyledButtomConatiner>
        {openCopyLinkModal && <StyledCopyLinkToastMessage>클립보드에 복사되었어요</StyledCopyLinkToastMessage>}
        <BigButton text="판매글 본문 보기" isDisabled={false} onClick={() => {}} />
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

const StyledCopyLinkToastMessage = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17.7rem;
  height: 3.8rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.medium14pt};

  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledButtomConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
