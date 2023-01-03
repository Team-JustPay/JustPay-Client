import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import ImagePostButton from 'components/common/ImagePostButton';
import UserInput from 'components/offer/buy/common/UserInput';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import SmallButton from 'components/offer/buy/common/SmallButton';

export default function AllowOfferContainer() {
  const [selectedButton, setSelectedButton] = useState('');
  const ButtonName = Object.freeze({
    ALL: '일괄 구매',
    INDIVIDUAL: '일부 구매',
  });

  const Tooltip = () => {
    switch (selectedButton) {
      case ButtonName.ALL:
        return '모든 상품을 구매해요';
      case ButtonName.INDIVIDUAL:
        return '일부 상품을 구매해요';
      default:
        return;
    }
  };

  return (
    <Root>
      <StyledTitleContainer>
        <MainText text="구매 희망 상품을 표시한 사진을 등록해주세요" />
        <SubText text="일괄 구매하는 경우에는 표시하지 않아도 돼요" />
      </StyledTitleContainer>
      <StyledImagePostWrapper>
        <ImagePostButton buttonSize="big" />
      </StyledImagePostWrapper>
      <SmallButtonContainer>
        <SmallButton
          text="일괄 구매"
          selectedButton={selectedButton}
          onClick={() => setSelectedButton(ButtonName.ALL)}
        />
        <SmallButton
          text="일부 구매"
          selectedButton={selectedButton}
          onClick={() => setSelectedButton(ButtonName.INDIVIDUAL)}
        />
        <SubtitleContainer>{Tooltip()}</SubtitleContainer>
      </SmallButtonContainer>
      {selectedButton === ButtonName.INDIVIDUAL && (
        <>
          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text="구매 희망 상품의 개수를 입력하세요"></MainText>
            </StyledTextContainer>
            <UserInput placeholder="정확한 상품의 개수를 입력해주세요" inputTextGuide="개" />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextContainer>
              <MainText text="판매자에게 제시 옵션을 한줄로 설명해주세요" />
              <SubText text="표시한 포카 4장 구매원함, 마크 셀포 브이 1장 구매," />
              <SubText text="핑크색머리 천러 중복 3장 등 이해하기 쉽게 설명해주세요" />
            </StyledTextContainer>
            <UserInput placeholder="상품이름, 일괄여부, 개수, 종류, 중복 여부 등" inputTextGuide="" />
          </StyledInputContainer>
        </>
      )}

      <StyledInputContainer>
        <StyledTextContainer>
          <MainText text="구매 희망가격을 제시하세요" />
        </StyledTextContainer>
        <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
      </StyledInputContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 4rem;
`;

const StyledTitleContainer = styled.div`
  margin: 1.8rem 0 2.4rem 0;
`;

const StyledImagePostWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 2.4rem;
`;

const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

const SubtitleContainer = styled.div`
  ${theme.fonts.regular14pt}
  color: ${theme.colors.main};
  margin-top: 0.8rem;
`;
