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

export default function matching() {
  const [isClicked, setIsClicked] = useState(true);

  const handleOptionTab = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <Header isMine={true} />
      <PriceInfo highestPrice={100000} />
      <UserProfile profileImage="" userName="스윙스" userId="@King_swings" />
      <SaleInfoContainer productCount={3} salesOption="일괄 판매만" priceOption="지정가격" />
      <SuggestContainer>
        <SuggestTab options={['매칭 중인 목록', '매칭 완료 목록']} outerFunc={handleOptionTab} isClicked={isClicked} />
        <SortOption optionText="구매 희망" optionNum={7} />
        <ItemContainer>
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
          <SuggestItem itemSize="small" description="매칭 대기중" />
        </ItemContainer>
      </SuggestContainer>
    </div>
  );
}
