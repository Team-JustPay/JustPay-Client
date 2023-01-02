import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import BigButton from 'components/common/BigButton';
import { TITLE, MENU } from 'constants/headerMessage';
import theme from 'styles/theme';
import CheckInfoBox from 'components/sell/sellInfo/CheckInfoBox';
import CheckBoxContents from 'components/sell/sellInfo/CheckBoxContents';

export default function checkInfomation() {
  return (
    <Root>
      <Header isHavingBackButton title={TITLE.ADD_SELLPOST} rightButtonText={MENU.CANCEL} />
      {/* 유저가 선택한 옵션을 여기서 작업 */}
      <StyledUserChoiceContainer>
        <CheckInfoBox infoTitle="상품 개수" infoText=" 2개" />
        <CheckInfoBox infoTitle="상품 개수" infoText=" 2개" />
        <CheckInfoBox infoTitle="상품 개수" infoText=" 2개" />
        <CheckInfoBox infoTitle="상품 개수" infoText=" 2개" />
        <CheckInfoBox infoTitle="상품 개수" infoText=" 2개" />
      </StyledUserChoiceContainer>

      {/* 유저가 체크할 수 있는 버튼이 담긴 컨테이너 */}
      <StyledCheckboxContainer>
        <CheckBoxContents noticeContent="사기 방지를 위해서 판매자가 설정한 기간 내에 송장번호를 입력해야만 구매자가 미리 결제한 돈이 자동입금 됩니다" />
        <CheckBoxContents noticeContent="나중에 적도록 하겠습니다. 은비 올림. 나중에 적도록 하겠습니다. 은비 올림. " />
        <CheckBoxContents noticeContent="나중에 적도록 하겠습니다. 은비 올림. 나중에 적도록 하겠습니다. 은비 올림. " />
      </StyledCheckboxContainer>
      <BigButton text="다음" isDisabled onClick={() => {}} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const StyledUserChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${theme.colors.grey_popup};
  border-radius: 0.8rem;
  width: 35.8rem;
  height: 24.8rem;

  padding: 2.4rem 1.6rem;
  margin-bottom: 2.4rem;
`;

// const Text = styled.div`
//   color: ${theme.colors.gray2};
//   ${theme.fonts.regular14pt};
// `;
