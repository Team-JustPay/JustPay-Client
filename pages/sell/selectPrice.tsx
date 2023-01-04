import React, { useEffect, useState, useCallback } from 'react';
import Router from 'next/router';
import styled, { css } from 'styled-components';
import { salesPostState } from '../../recoil/salespost';
import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import TitleText from 'components/common/TitleText';
import Header from 'components/common/Header';
import { TITLE, MENU } from 'constants/headerMessage';
import UserNumberInput from 'components/common/UserNumberInput';
import CheckRadio from 'components/common/CheckRadio';
import BigButton from 'components/common/BigButton';
import layout from './layout';
import TwoOptionContainer from 'components/common/TwoOptionContainer';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface PriceOptionProps {
  info: string;
  inputTitle: string;
}

interface PriceOptionButtonProps {
  isClicked: boolean;
}

export default function selectPrice() {
  const setSalesPostState = useSetRecoilState(salesPostState);
  const salesPostRecoil = useRecoilValue(salesPostState);

  const [inputText, setInputText] = useState('');
  const [isOpenInput, setIsOpenInput] = useState(false);

  let mainTextContent = '원하는 가격 옵션을 설정하세요';
  let priceOption: PriceOptionProps[] = [
    {
      info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
      inputTitle: '최소 판매 가격을 입력하세요',
    },
    {
      info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
      inputTitle: '판매 가격을 입력하세요',
    },
  ];
  const [currentPriceOption, setCurrentPriceOption] = useState(priceOption[0]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.replace(/[^0-9]/g, ''));
    setSalesPostState((prev) => ({ ...prev, price: Number(e.target.value) }));
  }, []);

  const handleOption = (e: React.MouseEvent) => {
    setIsOpenInput(true);
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.innerText === '가격 제시받기') {
        setCurrentPriceOption(priceOption[0]);
        setSalesPostState((prev) => ({ ...prev, priceOption: 'PRICE_OFFER' }));
      } else {
        setCurrentPriceOption(priceOption[1]);
        setSalesPostState((prev) => ({ ...prev, priceOption: 'DESIGNATED_PRICE' }));
      }
    }
  };

  const handleClickNextButton = () => {
    console.log(salesPostRecoil);
    Router.push('/sell/deliveryInfo');
  };

  useEffect(() => {
    console.log(salesPostRecoil);
    if (salesPostRecoil.salesOption === 'BULK_PARTIAL_SALE') {
      mainTextContent = '‘일괄 판매’에 대한 가격 옵션을 설정하세요';
      priceOption = [
        {
          info: '가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!',
          inputTitle: '‘일괄 판매’ 최소 가격을 입력하세요',
        },
        {
          info: '지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!',
          inputTitle: '‘일괄 판매’ 가격을 입력하세요',
        },
      ];
    }
  }, []);

  return (
    <>
      <div>
        <Header title={TITLE.ADD_SELLPOST} rightButtonText={MENU.BACK} isHavingBackButton />
        <TitleText>
          <SubText text="n개의 상품을 판매하시는군요!" isMainColor={false}></SubText>
          <MainText text={mainTextContent}></MainText>
        </TitleText>
        <div onClick={handleOption}>
          <TwoOptionContainer
            firstOption="가격 제시받기"
            secondOption="지정가격에만 팔기"
            firstOptionGuide="가격을 제시한 구매자들 중에서 거래할 사람을 직접 선택해요!"
            secondOptionGuide="지정가격을 제시한 구매자가 나타나면 자동으로 매칭돼요!"
          />
        </div>
        {isOpenInput && (
          <StyledPriceInputnContainer>
            <MainText text={currentPriceOption.inputTitle}></MainText>
            <UserNumberInput
              placeholder="500원 단위로 입력해주세요"
              inputTextGuide="원"
              onChangeFunc={handleInput}
              inputText={inputText}
            />
            <StyledCheckBox>
              <CheckRadio />
              <SubText text="판매 가격은 수정할 수 없어요" isMainColor={false}></SubText>
            </StyledCheckBox>
          </StyledPriceInputnContainer>
        )}
      </div>
      <BigButton text="다음" isDisabled={false} onClick={handleClickNextButton}></BigButton>
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
