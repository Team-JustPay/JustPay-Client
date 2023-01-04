import React, { useState } from 'react';
import styled from 'styled-components';

import SmallButton from './SmallButton';

interface ContainerProps {
  firstOption: string;
  secondOption: string;
  firstOptionGuide: string;
  secondOptionGuide: string;
}

export default function TwoOptionContainer({
  firstOption,
  secondOption,
  firstOptionGuide,
  secondOptionGuide,
}: ContainerProps) {
  const [isClicked, setIsClicked] = useState({ first: false, second: false });
  const handleClickFirstOption = () => {
    setIsClicked((prev) => ({ ...prev, first: true, second: false }));
  };
  const handleClickSecondOption = () => {
    setIsClicked((prev) => ({ ...prev, first: false, second: true }));
  };
  const renderOptionGuide = () => {
    if (isClicked.first) {
      return <GuideText>{firstOptionGuide}</GuideText>;
    }

    if (isClicked.second) {
      return <GuideText>{secondOptionGuide}</GuideText>;
    }
  };
  return (
    <>
      <ButtonContainer>
        <SmallButton text={firstOption} onClick={handleClickFirstOption} isClicked={isClicked.first} />
        <SmallButton text={secondOption} onClick={handleClickSecondOption} isClicked={isClicked.second} />
      </ButtonContainer>
      {renderOptionGuide()}
    </>
  );
}

const ButtonContainer = styled.article`
  display: flex;
  gap: 1.2rem;

  width: 100%;
`;

const GuideText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7rem;

  padding-top: 0.8rem;

  color: ${({ theme }) => theme.colors.main};
`;
