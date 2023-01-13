import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import { useRouter } from 'next/router';

export default function offerGuide() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Root>
      <Header isHavingBackButton title="구매 제시하기" rightButtonText="취소" />
      <StyledNoticeContainer>
        <StyledNotice>잠깐!&nbsp;</StyledNotice>
        <StyledNoticeTooltip>원활한 제시를 위해 아래 설명을 참고해주세요</StyledNoticeTooltip>
      </StyledNoticeContainer>
      <StyledContentContainer>
        <StyledContentTitle>1.&nbsp;일괄+일부 판매일경우</StyledContentTitle>
        <StyledFirstImage>
          <img src="/assets/images/offer/guide/first.png" />
        </StyledFirstImage>
      </StyledContentContainer>
      <StyledContentContainer>
        <StyledContentTitle>2.&nbsp;선택한 옵션에 대해 설명을 남겨주세요</StyledContentTitle>
        <StyledSecondImage>
          <img src="/assets/images/offer/guide/second.png" />
        </StyledSecondImage>
      </StyledContentContainer>
      <StyledContentTitle>3.&nbsp;사진 편집은 이렇게하면 돼요! </StyledContentTitle>
      <StyledThirdImage>
        <img src="/assets/images/offer/guide/third.png" />
      </StyledThirdImage>
      <StyledFourthImage>
        <img src="/assets/images/offer/guide/fourth.png" />
      </StyledFourthImage>

      <BigButton text="다음" isDisabled={false} onClick={() => router.push(`/offer/buy/${id}`)} />
    </Root>
  );
}

const Root = styled.div``;

const StyledNoticeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin: 1.8rem 0 2rem 0;
  color: ${theme.colors.main};
`;

const StyledNotice = styled.p`
  ${theme.fonts.title14pt}
`;
const StyledNoticeTooltip = styled.p`
  ${theme.fonts.regular14pt}
`;

const StyledContentContainer = styled.div`
  width: 100%;
  margin-bottom: 6rem;
`;

const StyledContentTitle = styled.h1`
  ${theme.fonts.title18pt}
  color: ${theme.colors.white};

  margin-bottom: 2.4rem;
`;

const StyledThirdWrapper = styled.div`
  margin-bottom: 2.7rem;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.grey_popup};
  border-radius: 0.8rem;
`;

const StyledFirstImage = styled(StyledImageContainer)`
  height: 22.6rem;
  padding-top: 2rem;
`;
const StyledSecondImage = styled(StyledImageContainer)``;

const StyledThirdImage = styled(StyledImageContainer)`
  margin-bottom: 2.7rem;
`;
const StyledFourthImage = styled(StyledImageContainer)`
  margin-bottom: 5rem;
`;
