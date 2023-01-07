import React, { useState } from 'react';

import Header from 'components/matching/Header';
import PriceInfo from 'components/matching/PriceInfo';
import UserProfile from 'components/common/UserProfile';
import SaleInfoContainer from 'components/common/SaleInfoContainer';
import SuggestContainer from 'components/matching/SuggestContainer';
import SuggestTab from 'components/matching/SuggestTab';
import SortOption from 'components/matching/SortOption';
import ItemContainer from 'components/matching/ItemContainer';
import SuggestItem from 'components/matching/SuggestItem';
import BigButton from 'components/common/BigButton';
import Modal from 'components/common/Modal';
import ToastMessage from 'components/common/ToastMessage';
import NoItem from 'components/matching/NoItem';

export default function matching() {
  const [itemNum, setItemNum] = useState(10);
  const [isClicked, setIsClicked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMine, setIsMine] = useState(false);
  const [isSuggested, setIsSuggested] = useState(false);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
  };

  const handleClickCancelButton = () => {
    setIsModalOpen(true);
  };

  const handleClickCloseButton = () => {
    setIsModalOpen(false);
  };

  const handleSuggetButton = () => {
    setIsSuggested(true);
    setTimeout(() => {
      setIsSuggested(false);
    }, 2000);
  };

  return (
    <>
      <Header isMine={isMine} modalOpenFunc={handleClickCancelButton} />
      <PriceInfo highestPrice={100000} />
      <UserProfile profileImage="" userName="스윙스" userId="@King_swings" />
      <SaleInfoContainer productCount={3} salesOption="일괄 판매만" priceOption="지정가격" />
      <SuggestContainer>
        <SuggestTab options={['매칭 중인 목록', '매칭 완료 목록']} outerFunc={handleOptionTab} isClicked={isClicked} />
        <SortOption optionText="구매 희망" optionNum={7} />
        <ItemContainer>
          {/* {!itemNum && <NoItem />} */}
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
        </ItemContainer>
      </SuggestContainer>
      {isSuggested && <ToastMessage text="판매글에 구매를 제시했어요!" />}
      {!isMine && <BigButton text="구매 제시하기" isDisabled={false} onClick={handleSuggetButton} />}
      {isModalOpen && (
        <Modal
          title="판매를 종료하시겠어요?"
          content="판매를 종료하면 더 이상 매칭이 불가능해요<br />
        상품판매를 모두 마친 후에 판매를 종료해주세요"
          buttonFirstTitle="취소"
          buttonSecondTitle="확인"
          buttonFirstFunction={handleClickCloseButton}
        />
      )}
    </>
  );
}
