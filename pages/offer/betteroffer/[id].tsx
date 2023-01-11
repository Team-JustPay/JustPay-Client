import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGetSalesPostInfo } from 'apiHooks/salesPost';
import { useSetRaisePrice } from 'apiHooks/suggests';

import Header from 'components/common/Header';
import UserNumberInput from 'components/common/UserNumberInput';
import BuyInfoContainer from 'components/common/BuyInfoContainer';
import BigButton from 'components/common/BigButton';

export default function improvedoffer() {
  const router = useRouter();
  const { suggestId, salesPostId } = router.query;
  const [inputText, setInputText] = useState('');

  const { data: salesPostInfo } = useGetSalesPostInfo(Number(salesPostId));
  const { mutate: handleRaisePriceButton } = useSetRaisePrice(Number(suggestId), Number(inputText));
  const currentHighstPrice = `현재 최고가 ${salesPostInfo?.data.data.highestPrice}원`;

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.replace(/[^0-9]/g, '').replace(/(^0+)/g, ''));
  }, []);

  const handleClickRaisePriceButton = () => {
    handleRaisePriceButton();
    router.push(`/matching/${Number(salesPostId)}`);
  };

  return (
    <Root>
      <Header title={'가격올리기'} isHavingBackButton rightButtonText={'취소'} />
      <NewOfferText>가격을 올려서 새로 제시하세요</NewOfferText>
      <UserNumberInput
        placeholder="500원 단위로 입력해주세요"
        inputTextGuide="원"
        onChangeFunc={handleInput}
        inputText={inputText}></UserNumberInput>
      <TopPriceWrapper>{currentHighstPrice}</TopPriceWrapper>
      <OptionCheck>제시했던 옵션을 확인하세요</OptionCheck>
      <ImgWrapper>
        <Image src={salesPostInfo?.data.data.mainImageUrl} layout="fill" alt="상품 사진" />
      </ImgWrapper>
      <BuyInfoContainer
        BuyCount={salesPostInfo?.data.data.productCount}
        BuysOption={salesPostInfo?.data.data.purchaseOption === 'BULK' ? '일괄 구매' : '일부 구매'}
        DeliveryOption={salesPostInfo?.data.data.priceOption === 'PRICE_OPTION' ? '제시 가격' : '지정 가격'}
      />
      {salesPostInfo?.data.data.description !== '' && (
        <SuggeterTextWrapper>
          <SuggeterText>{salesPostInfo?.data.data.description}</SuggeterText>
        </SuggeterTextWrapper>
      )}
      <BigButtonWrapper>
        <BigButton text={'가격 수정하기'} isDisabled={false} onClick={handleClickRaisePriceButton} />
      </BigButtonWrapper>
    </Root>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}

const Root = styled.div``;

const NewOfferText = styled.p`
  ${({ theme }) => theme.fonts.title18pt};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1.8rem;
  margin-bottom: 2.4rem;
`;

const TopPriceWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.regular14pt}
  margin-top: 0.8rem;
`;

const OptionCheck = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title18pt}
  margin-top: 4.8rem;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 24.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_popup};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  position: relative;
  overflow: hidden;
`;

const SuggeterTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_popup};
  height: 4.9rem;
  width: 100%;
  border-radius: 8px;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuggeterText = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.regular14pt}
`;

const BigButtonWrapper = styled.div`
  margin-top: 10rem;
`;
