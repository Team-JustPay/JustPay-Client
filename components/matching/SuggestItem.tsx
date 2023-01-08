import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import FirstPic from '../../public/assets/images/suggestItem.png';
import ProfilePic from '../../public/assets/icons/profile.svg';
import theme from 'styles/theme';

interface SuggestItemProps {
  itemSize: 'big' | 'small';
  description: string;
  status: number;
  isMine: boolean;
  element: any;
  outerFunc?: (() => void)[];
}

interface ComponentProps {
  itemSize: 'big' | 'small';
}

interface ButtonProps {
  backgroundColorType: string;
  colorType: string;
}

export default function SuggestItem({ itemSize, description, status, isMine, element, outerFunc }: SuggestItemProps) {
  const renderButton = () => {
    if (isMine) {
      switch (status) {
        case 1:
          return;
        case 2:
          return (
            <TwoButtonContainer>
              <TwoOptionButton
                backgroundColorType={theme.colors.main_opacity20}
                colorType={theme.colors.main}
                onClick={outerFunc?.[0]}>
                배송정보 보기
              </TwoOptionButton>
              <TwoOptionButton
                backgroundColorType={theme.colors.main}
                colorType={theme.colors.white}
                onClick={outerFunc?.[1]}>
                운송장 입력하기
              </TwoOptionButton>
            </TwoButtonContainer>
          );
        case 3:
          return (
            <TwoButtonContainer>
              <TwoOptionButton backgroundColorType={theme.colors.main_opacity20} colorType={theme.colors.main}>
                배송정보 보기
              </TwoOptionButton>
              <TwoOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                구매 확정됨
              </TwoOptionButton>
            </TwoButtonContainer>
          );
      }
    } else {
      switch (status) {
        case 1:
          return (
            <OneButtonContainer>
              <OneOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                운송장 입력 전
              </OneOptionButton>
            </OneButtonContainer>
          );
        case 2:
          return (
            <TwoButtonContainer>
              <TwoOptionButton backgroundColorType={theme.colors.main_opacity20} colorType={theme.colors.main}>
                운송장 확인하기
              </TwoOptionButton>
              <TwoOptionButton backgroundColorType={theme.colors.main} colorType={theme.colors.white}>
                구매 확정하기
              </TwoOptionButton>
            </TwoButtonContainer>
          );
        case 3:
          return (
            <TwoButtonContainer>
              <TwoOptionButton backgroundColorType={theme.colors.main_opacity20} colorType={theme.colors.main}>
                운송장 확인하기
              </TwoOptionButton>
              <TwoOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                구매 확정됨
              </TwoOptionButton>
            </TwoButtonContainer>
          );
      }
    }
  };
  return (
    <Root>
      <ItemContainer itemSize={itemSize}>
        <Image src={FirstPic} alt="상품 사진" />
        <SuggestInfo>
          <SuggestState itemSize={itemSize}>
            <SuggestStateText>{description}</SuggestStateText>
            <ProfilePic />
          </SuggestState>
          {itemSize === 'big' && (
            <Option>
              <BuyOption>
                {element.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
                <strong>{element.productCount}개</strong>
              </BuyOption>
              <Price>{element.price} 원 제시</Price>
            </Option>
          )}
        </SuggestInfo>
      </ItemContainer>
      {renderButton()}
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ItemContainer = styled.article<ComponentProps>`
  display: flex;
  justify-content: space-between;

  width: 100%;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};

  ${({ itemSize }) =>
    itemSize === 'small'
      ? css`
          height: 6.4rem;
          img {
            width: 6.4rem !important;
          }
        `
      : css`
          height: 12.2rem;
          img {
            width: 16rem !important;
          }
        `}
`;

const SuggestInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px 20px 20px 0;

  text-align: right;
`;

const SuggestState = styled.section<ComponentProps>`
  display: flex;
  gap: 1.2rem;

  font-weight: ${({ itemSize }) => (itemSize === 'small' ? '400' : '700')};
`;

const SuggestStateText = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Option = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BuyOption = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  strong {
    font-weight: 700;
    margin-left: 0.8rem;
  }
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const TwoButtonContainer = styled.section`
  display: flex;
  gap: 1.2rem;

  width: 100%;
`;

const TwoOptionButton = styled.button<ButtonProps>`
  width: calc((100% - 1.2rem) / 2);

  padding: 1.2rem 0;

  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 700;

  border-radius: 0.8rem;

  background-color: ${(props) => props.backgroundColorType};
  color: ${(props) => props.colorType};
`;

const OneButtonContainer = styled.section`
  width: 100%;
`;
const OneOptionButton = styled.button<ButtonProps>`
  width: 100%;

  padding: 1.2rem 0;

  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 700;

  border-radius: 0.8rem;

  background-color: ${(props) => props.backgroundColorType};
  color: ${(props) => props.colorType};
`;
