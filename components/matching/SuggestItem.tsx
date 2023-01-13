import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import theme from 'styles/theme';

interface SuggestItemProps {
  itemSize: 'big' | 'small';
  description: string;
  status: number;
  isOwner: boolean;
  isMine: boolean;
  element: any;
  onClick: () => void;
  outerFunc?: (() => void)[];
}

interface ComponentProps {
  itemSize: 'big' | 'small';
  isOwner?: boolean;
  isMine?: boolean;
  status?: number;
}

interface ButtonProps {
  backgroundColorType: string;
  colorType: string;
}

interface ImageContainerProps {
  itemSize: 'big' | 'small';
}

export default function SuggestItem({
  itemSize,
  onClick,
  status,
  isOwner,
  isMine,
  element,
  outerFunc,
}: SuggestItemProps) {
  const renderButton = () => {
    if (isOwner) {
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
              <TwoOptionButton
                backgroundColorType={theme.colors.main_opacity20}
                colorType={theme.colors.main}
                onClick={outerFunc?.[0]}>
                배송정보 보기
              </TwoOptionButton>
              <TwoOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                구매 확정됨
              </TwoOptionButton>
            </TwoButtonContainer>
          );
      }
    } else {
      if (isMine) {
        switch (status) {
          case 1:
            return (
              <OneButtonContainer>
                <OneOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                  운송장 입력 중
                </OneOptionButton>
              </OneButtonContainer>
            );
          case 2:
            return (
              <TwoButtonContainer>
                <TwoOptionButton
                  backgroundColorType={theme.colors.main_opacity20}
                  colorType={theme.colors.main}
                  onClick={outerFunc?.[0]}>
                  운송장 확인하기
                </TwoOptionButton>
                <TwoOptionButton
                  backgroundColorType={theme.colors.main}
                  colorType={theme.colors.white}
                  onClick={outerFunc?.[1]}>
                  구매 확정하기
                </TwoOptionButton>
              </TwoButtonContainer>
            );
          case 3:
            return (
              <TwoButtonContainer>
                <TwoOptionButton
                  backgroundColorType={theme.colors.main_opacity20}
                  colorType={theme.colors.main}
                  onClick={outerFunc?.[0]}>
                  운송장 확인하기
                </TwoOptionButton>
                <TwoOptionButton backgroundColorType={theme.colors.gray0} colorType={theme.colors.gray2}>
                  구매 확정됨
                </TwoOptionButton>
              </TwoButtonContainer>
            );
        }
      }
    }
  };
  return (
    <Root onClick={onClick}>
      <ItemContainer itemSize={itemSize} isOwner={isOwner} isMine={isMine} status={status}>
        <ImageContainer itemSize={itemSize}>
          <Image src={element.imageUrl} alt="상품 사진" layout="fill" />
        </ImageContainer>
        <SuggestInfo>
          <SuggestState itemSize={itemSize}>
            {itemSize === 'small' ? (
              <SuggestStateText>{`${element.price.toLocaleString('ko-KR')}원 제시`}</SuggestStateText>
            ) : (
              <SuggestStateHighlight>
                {description.length > 10 ? description.substring(0, 10) + '...' : description}
              </SuggestStateHighlight>
            )}
            <ProfileImageContainer>
              <Image src={element.suggester.profileImageUrl} layout="fill" />
            </ProfileImageContainer>
          </SuggestState>
          {itemSize === 'big' && (
            <Option>
              <BuyOption>
                {element.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
                <strong>{element.productCount}개</strong>
              </BuyOption>
              <Price>{element.price.toLocaleString()} 원 제시</Price>
            </Option>
          )}
        </SuggestInfo>
      </ItemContainer>
      {renderButton()}
    </Root>
  );
}

const Root = styled.section`
  border-radius: 0.8rem;
`;

const ItemContainer = styled.article<ComponentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 1.2rem;

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

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: ${({ itemSize }) => (itemSize === 'small' ? '6.2rem' : '12.4rem')};
  height: ${({ itemSize }) => (itemSize === 'small' ? '6.4rem' : '12.1rem')};

  border-radius: 0.8rem;
  overflow: hidden;
`;

const ProfileImageContainer = styled.section`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

  overflow: hidden;
  border-radius: 50%;
`;

const SuggestInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

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

const SuggestStateHighlight = styled(SuggestStateText)`
  font-weight: bold;
  margin-bottom: 2.1rem;
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
