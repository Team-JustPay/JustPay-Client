import React, { useState } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import FirstPic from '../../public/assets/images/suggestItem.png';
import ProfilePic from '../../public/assets/icons/profile.svg';
import theme from 'styles/theme';
import Modal from 'components/common/Modal';
import Router from 'next/router';
interface SuggestItemProps {
  itemSize: 'big' | 'small';
  description: string;
  status: number;
  element: any;
  imageUrl: string;
}

interface ComponentProps {
  itemSize: 'big' | 'small';
}

interface ButtonProps {
  backgroundColorType: string;
  colorType: string;
}

export default function SuggestItem({ itemSize, description, status, element, imageUrl }: SuggestItemProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const moveToCheckInvoice = () => {
    Router.push('/myBuy/${1}/invoice');
  };

  const renderButton = () => {
    switch (status) {
      case 0:
        return <StyledMatchingWaitingButton>매칭 대기중</StyledMatchingWaitingButton>;
      case 1:
        return (
          <TwoButtonContainer>
            <TwoOptionButton
              backgroundColorType={theme.colors.main_opacity20}
              colorType={theme.colors.main}
              onClick={handleOpenModal}>
              인증사진 보기
            </TwoOptionButton>
            <TwoOptionButton backgroundColorType={theme.colors.main} colorType={theme.colors.white}>
              결제하기
            </TwoOptionButton>
          </TwoButtonContainer>
        );
      case 2:
        return (
          <TwoButtonContainer>
            <TwoOptionButton
              backgroundColorType={theme.colors.main_opacity20}
              colorType={theme.colors.main}
              onClick={moveToCheckInvoice}>
              운송장 확인하기
            </TwoOptionButton>
            <TwoOptionButton backgroundColorType={theme.colors.main} colorType={theme.colors.white}>
              구매 확정하기
            </TwoOptionButton>
          </TwoButtonContainer>
        );
    }
  };
  return (
    <Root>
      <ItemContainer itemSize={itemSize}>
        <ImageWrapper itemSize={itemSize}>
          <Image src={imageUrl} alt="상품 사진" layout="fill" />
        </ImageWrapper>
        <SuggestInfo>
          <SuggestState itemSize={itemSize}>
            {itemSize === 'small' ? (
              <SuggestStateText>{`${element.price.toLocaleString('ko-KR')}원 제시`}</SuggestStateText>
            ) : (
              <SuggestStateHighlight>
                {description.length > 10 ? description.substring(0, 10) + '...' : description}
              </SuggestStateHighlight>
            )}
            <ProfilePic />
          </SuggestState>
          {itemSize === 'big' && (
            <Option>
              <BuyOption>
                {element.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
                <strong>{element.productCount}개</strong>
              </BuyOption>
              <Price>{`${element.price.toLocaleString('ko-KR')}원 제시`}</Price>
            </Option>
          )}
        </SuggestInfo>
      </ItemContainer>
      {renderButton()}
      {openModal && (
        <Modal
          title={'인증사진을 확인하셨나요?'}
          content={'인증사진을 꼼꼼하게 확인하고 결제해주세요 <br/> 결제가 완료되면 취소할 수 없어요'}
          buttonFirstTitle={'닫기'}
          buttonFirstFunction={handleOpenModal}
          buttonSecondTitle={'결제하기'}
          buttonSecondFunction={() => {}}
        />
      )}
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

const ImageWrapper = styled.div<ComponentProps>`
  position: relative;
  width: ${({ itemSize }) => (itemSize === 'small' ? '6.2rem' : '12.4rem')};
  height: ${({ itemSize }) => (itemSize === 'small' ? '6.2rem' : '12.1rem')};

  border-radius: 0.8rem;
  overflow: hidden;
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
  justify-content: flex-end;
  gap: 1.2rem;

  font-weight: ${({ itemSize }) => (itemSize === 'small' ? '400' : '700')};
`;

const SuggestStateText = styled.p`
  ${({ theme }) => theme.fonts.regular14pt}
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2.4rem;
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

const StyledMatchingWaitingButton = styled.button`
  padding: 1.5rem 0 1.4rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.gray0};
  color: ${({ theme }) => theme.colors.gray2};

  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;
`;
