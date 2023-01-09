import React from 'react';
import styled from 'styled-components';

import DealCount from '../../public/assets/icons/profile/dealCount.svg';
import SaleCount from '../../public/assets/icons/profile/saleCount.svg';
import SaleMoney from '../../public/assets/icons/profile/saleMoney.svg';
import PurchaseCount from '../../public/assets/icons/profile/purchaseCount.svg';
import PurchaseMoney from '../../public/assets/icons/profile/purchaseMoney.svg';

interface MySellInfoContainerProps {
  dealCount: number;
  saleCount: number;
  saleMoney: number;
  isPurchase?: boolean;
  isSale?: boolean;
}

interface MySellInfoListProps {
  icon: string;
  title: string;
  content: number;
}
export default function MySellInfoContainer({
  dealCount,
  saleCount,
  saleMoney,
  isPurchase,
  isSale,
}: MySellInfoContainerProps) {
  return (
    <Root>
      <StyledSellInfo>
        <DealCount />
        <StyledUnit>{dealCount}개</StyledUnit>
        <h1>거래한 상품</h1>
      </StyledSellInfo>
      <StyledBar></StyledBar>
      <StyledSellInfo>
        {isSale && (
          <>
            <SaleMoney />
          </>
        )}
        {isPurchase && <PurchaseMoney />}
        <StyledUnit>{saleMoney.toLocaleString()}원</StyledUnit>
        {isSale && <h1>판매한 금액</h1>}
        {isPurchase && <h1>구매한 금액</h1>}
      </StyledSellInfo>
      <StyledBar></StyledBar>
      <StyledSellInfo>
        {isSale && <SaleCount />}
        {isPurchase && <PurchaseCount />}
        <StyledUnit>{saleCount}장</StyledUnit>
        {isSale && <h1>판매한 포토카드</h1>}
        {isPurchase && <h1>구매한 포토카드</h1>}
      </StyledSellInfo>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 13.9rem;
  padding: 2.6rem 2.1rem;
  margin-bottom: 2.2rem;

  background: rgba(28, 28, 28, 0.3);
  border-radius: 0.8rem;

  & :last-child {
    border: none;
  }
`;

const StyledSellInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title16pt};
  }
  h1 {
    text-align: center;

    margin-top: 0.8rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.regular12pt};
  }
`;

const StyledUnit = styled.p`
  margin-top: 1rem;
`;

const StyledBar = styled.div`
  width: 0px;
  height: 5.7rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray0};
`;
