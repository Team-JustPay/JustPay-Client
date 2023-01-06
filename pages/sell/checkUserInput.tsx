import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import BigButton from '../../components/common/BigButton';
import { TITLE, MENU } from '../../constants/headerMessage';
import CheckInfoBox from '../../components/sell/sellInfo/CheckInfoBox';
import CheckBoxContents from '../../components/sell/sellInfo/CheckBoxContents';
import Router from 'next/router';
import { useRecoilValue } from 'recoil';
import { salesPostState } from '../../recoil/salespost';
import { useRouter } from 'next/router';
import layout from './layout';

export default function checkInfomation() {
  const router = useRouter();

  const postData = useRecoilValue(salesPostState);
  const [isFirstCheck, setIsFirstCheck] = useState(false);
  const [isSecondCheck, setIsSecondCheck] = useState(false);
  const [isThirdCheck, setIsThirdCheck] = useState(false);

  const DeliveryOptions = postData.shippingOptions
    .reduce((acc, cur) => {
      return (acc = acc + cur + ', ');
    }, '')
    .slice(0, -2);

  console.log(DeliveryOptions);

  const handleClickNextButton = () => {
    Router.push('/sell/write');
  };

  const handleFirstCheckButton = () => {
    setIsFirstCheck(!isFirstCheck);
  };
  const handleSecondCheckButton = () => {
    setIsSecondCheck(!isSecondCheck);
  };
  const handleThirdCheckButton = () => {
    setIsThirdCheck(!isThirdCheck);
  };

  const CheckVaildStatus = () => {
    if (isFirstCheck === true && isSecondCheck === true && isThirdCheck === true) {
      return true;
    }
    return false;
  };

  const moveToPrevPage = () => {
    router.push('/sell/deliveryInfo');
  };

  return (
    <Root>
      <Header
        isHavingBackButton
        title={TITLE.ADD_SELLPOST}
        rightButtonText={MENU.CANCEL}
        handleLeftButton={moveToPrevPage}
      />

      <StyledUserChoiceContainer>
        <CheckInfoBox infoTitle="상품 개수" infoText={'' + postData.productCount} />

        <CheckInfoBox
          infoTitle="가격 옵션"
          infoText={postData.priceOption === 'PRICE_OFFER' ? '가격 제시받기' : '지정가격에만 팔기'}
        />

        {postData.productCount && postData.productCount >= 2 && (
          <CheckInfoBox
            infoTitle="판매 유형"
            infoText={postData.salesOption === 'BULK' ? '일괄 판매만' : '일괄 + 일부'}
          />
        )}
        <CheckInfoBox infoTitle="배송 가능 옵션" infoText={DeliveryOptions} />
        <CheckInfoBox
          infoTitle={
            postData.priceOption === 'DESIGNATED_PRICE'
              ? '판매가격'
              : postData.salesOption === 'BULK'
              ? '최소 판매 가격'
              : '일괄 판매 최소 가격'
          }
          infoText={`${postData.price?.toLocaleString()}원`}
        />
      </StyledUserChoiceContainer>

      <StyledCheckboxContainer>
        <CheckBoxContents
          isChecked={isFirstCheck}
          onClick={handleFirstCheckButton}
          noticeContent="사기 방지를 위해서 판매자가 설정한 기간 내에 송장번호를 입력해야만 구매자가 미리 결제한 돈이 자동입금 됩니다"
        />
        <CheckBoxContents
          isChecked={isSecondCheck}
          onClick={handleSecondCheckButton}
          noticeContent="나중에 적도록 하겠습니다. 은비 올림. 나중에 적도록 하겠습니다. 은비 올림. "
        />
        <CheckBoxContents
          isChecked={isThirdCheck}
          onClick={handleThirdCheckButton}
          noticeContent="나중에 적도록 하겠습니다. 은비 올림. 나중에 적도록 하겠습니다. 은비 올림. "
        />
      </StyledCheckboxContainer>
      <BigButtonWrapper>
        <BigButton text="다음" isDisabled={!CheckVaildStatus()} onClick={handleClickNextButton} />
      </BigButtonWrapper>
    </Root>
  );
}

checkInfomation.Layout = layout;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledUserChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 6.8rem;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;
  width: 100%;
  height: 24.8rem;

  padding: 0rem 1.6rem;
  margin-bottom: 2.4rem;
`;

const BigButtonWrapper = styled.div`
  width: 100%;
`;
