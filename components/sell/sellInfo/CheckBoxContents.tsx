import React from 'react';
import styled from 'styled-components';
import CheckRadio from 'components/common/CheckRadio';
interface CheckBoxContentsProps {
  noticeContent: string;
}
export default function CheckBoxContents({ noticeContent }: CheckBoxContentsProps) {
  return (
    <Root>
      <StyledNoticeContainer>
        <CheckRadio />
        <StyledNotice>{noticeContent}</StyledNotice>
      </StyledNoticeContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNoticeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 32.6rem;
  justify-content: space-between;
`;

const StyledNotice = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.regular14pt};

  line-height: 2rem;
  width: 29.4rem;
`;
