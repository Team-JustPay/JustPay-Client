import React from 'react';
import styled from 'styled-components';

import DealCount from '../../public/assets/icons/dealCount.svg';
import SaleCount from '../../public/assets/icons/saleCount.svg';
import SaleMoney from '../../public/assets/icons/saleMoney.svg';
interface MySellInfoContainerProps {
  dealCount: number;
  saleCount: number;
  saleMoney: number;
}

interface MySellInfoListProps {
  icon: string;
  title: string;
  content: number;
}
export default function MySellInfoContainer({ dealCount, saleCount, saleMoney }: MySellInfoContainerProps) {
  return (
    <Root>
      <StyledSellInfo>
        <DealCount />
        <p>{dealCount}개</p>
        <h1>
          상품을 <br /> 거래했어요
        </h1>
      </StyledSellInfo>
      <StyledBar></StyledBar>
      <StyledSellInfo>
        <SaleMoney />
        <p>{saleMoney?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        <h1>
          저스트페이로
          <br /> 판매했어요
        </h1>
      </StyledSellInfo>
      <StyledBar></StyledBar>
      <StyledSellInfo>
        <SaleCount />
        <p>{saleCount}장</p>
        <h1>
          포토카드를 <br />
          판매했어요
        </h1>
      </StyledSellInfo>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 16.3rem;
  padding: 2.6rem 2.1rem;

  background: rgba(28, 28, 28, 0.3);
  border-radius: 0.8rem;

  & :last-child {
    border: none;
  }
`;

const StyledSellInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const StyledBar = styled.div`
  width: 0px;
  height: 5.7rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray0};
`;
