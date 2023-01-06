import React from 'react';
import styled from 'styled-components';
import CheckRadio from 'components/sell/sellInfo/CheckRadio';
interface CheckBoxContentsProps {
  noticeContent: string;
  isChecked: boolean;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CheckBoxContents({ noticeContent, isChecked, onClick }: CheckBoxContentsProps) {
  return (
    <Root>
      <CheckRadio isChecked={isChecked} onClick={onClick} />
      <StyledNotice>{noticeContent}</StyledNotice>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

const StyledNotice = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  ${({ theme }) => theme.fonts.regular14pt};

  line-height: 2rem;
  width: 29.4rem;
  margin-left: 0.5rem;
`;
