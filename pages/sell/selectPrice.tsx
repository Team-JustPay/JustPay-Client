import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import SmallButton from 'components/common/SmallButton';
import UserInput from 'components/common/UserInput';
import CheckRadio from 'components/common/CheckRadio';
import BigButton from 'components/common/BigButton';
import layout from './layout';

interface PriceOptionProps {
  info: string;
  inputTitle: string;
}

interface PriceOptionButtonProps {
  isClicked: boolean;
}

export default function selectPrice() {
  const priceOption: PriceOptionProps[] = [
    {
      info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
      inputTitle: '최소 판매 가격을 입력하세요',
    },
    {
      info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
      inputTitle: '판매 가격을 입력하세요',
    },
  ];

  const [isOfferPrice, setIsOfferPrice] = useState(true);
  const [isLimitPrice, setIsLimitPrice] = useState(false);
  const [currentPriceOption, setCurrentPriceOption] = useState(priceOption[0]);
  const handlePriceOption = (id: number) => {
    setIsOfferPrice(!isOfferPrice);
    setIsLimitPrice(!isLimitPrice);
    id === 0 ? setCurrentPriceOption(priceOption[0]) : setCurrentPriceOption(priceOption[1]);
  };

  useEffect(() => {
    let priceOption: PriceOptionProps[] = [];
    //if 판매 상품이 1개나 일괄 판매일 경우
    priceOption = [
      {
        info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
        inputTitle: '최소 판매 가격을 입력하세요',
      },
      {
        info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
        inputTitle: '판매 가격을 입력하세요',
      },
    ];
    // if 판매 상품이 2개 이상인데 일부 판매일 경우
    // priceOption = [
    //   {
    //     info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
    //     inputTitle: '‘일괄 판매’ 최소 가격을 입력하세요',
    //   },
    //   {
    //     info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
    //     inputTitle: '‘일괄 판매’ 가격을 입력하세요',
    //   },
    // ];
  }, []);
  return (
    <>
      <div>
        <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.BACK} isHavingBackButton />
        <TitleText>
          <MainText text="n개의 상품을 판매하시는군요!"></MainText>
          <SubText text="원하는 가격 옵션을 설정하세요" isMainColor={false}></SubText>
        </TitleText>
        <StyledPriceOptionButtonContainer>
          <StyledPriceOptionButton isClicked={isOfferPrice} onClick={() => handlePriceOption(0)}>
            가격 제시받기
          </StyledPriceOptionButton>
          <StyledPriceOptionButton isClicked={isLimitPrice} onClick={() => handlePriceOption(1)}>
            지정가격에만 팔기
          </StyledPriceOptionButton>
        </StyledPriceOptionButtonContainer>
        <SubText text={currentPriceOption.info} isMainColor={true}></SubText>
        <StyledPriceInputnContainer>
          <MainText text={currentPriceOption.inputTitle}></MainText>
          <UserInput placeholder="500원 단위로 입력해주세요" inputTextGuide="원" />
          <StyledCheckBox>
            <CheckRadio />
            <SubText text="판매 가격은 수정할 수 없어요" isMainColor={false}></SubText>
          </StyledCheckBox>
        </StyledPriceInputnContainer>
      </div>
      <BigButton text="다음" isDisabled={true} onClick={() => {}}></BigButton>
    </>
  );
}

selectPrice.Layout = layout;

const StyledPriceOptionButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const StyledPriceOptionButton = styled.button<PriceOptionButtonProps>`
  width: calc(50% - 0.6rem);
  padding: 1.5rem 0 1.4rem;

  ${({ isClicked }) =>
    isClicked
      ? css`
          border: 0.2rem solid;
          border-color: ${({ theme }) => theme.colors.main};
          background-color: ${({ theme }) => theme.colors.main_opacity20};
          color: ${({ theme }) => theme.colors.main};
        `
      : css`
          border: 0.1rem solid;
          border-color: ${({ theme }) => theme.colors.gray3};
          background-color: ${({ theme }) => theme.colors.gray_background};
          color: ${({ theme }) => theme.colors.white};
        `}
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;

const StyledPriceInputnContainer = styled.section`
  margin-top: 4rem;

  & :first-child {
    margin-bottom: 2.4rem;
  }
`;

const StyledCheckBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: -0.4rem;

  & :first-child {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
`;
