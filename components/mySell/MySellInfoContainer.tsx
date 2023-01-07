import React from 'react';
import styled from 'styled-components';
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
        <img />
        <p>{dealCount}개</p>
        <h1>
          상품을 <br /> 거래했어요
        </h1>
      </StyledSellInfo>
      <StyledSellInfo>
        <img />
        <p>{saleMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        <h1>
          저스트페이로
          <br /> 판매했어요
        </h1>
      </StyledSellInfo>
      <StyledSellInfo>
        <img />
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

  width: 100%;
  padding: 0 4.8rem;
`;

const StyledSellInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 4rem;

  img {
    width: 4.2rem;
    height: 4.2rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray2};
  }
  p {
    margin-top: 1.2rem;

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
