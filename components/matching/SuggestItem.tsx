import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import FirstPic from '../../public/assets/images/suggestItem.png';
import ProfilePic from '../../public/assets/icons/profile.svg';

interface SuggestItemProps {
  itemSize: 'big' | 'small';
  description: string;
  purchaseOption?: string;
  productCount?: number;
  price?: number;
}

interface ComponentProps {
  itemSize: 'big' | 'small';
}

export default function SuggestItem({ itemSize, description, purchaseOption, productCount, price }: SuggestItemProps) {
  return (
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
              {purchaseOption}
              <strong>{productCount}개</strong>
            </BuyOption>
            <Price>{price} 원 제시</Price>
          </Option>
        )}
      </SuggestInfo>
    </ItemContainer>
  );
}

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
