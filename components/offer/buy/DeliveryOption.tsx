import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Postoffice from 'public/assets/icons/postofficedelivery.svg';
import Gspost from 'public/assets/icons/gspost.svg';
import Cupost from 'public/assets/icons/cupost.svg';
import Mail from 'public/assets/icons/mail.svg';
import QuasiRegistration from 'public/assets/icons/quasi-registration.svg';

interface DeliveryOptionProps {
  id: number;
  name: string;
  price: string;
  contents: string[];
  isAllowedSinglePick?: boolean;
  isPicked?: boolean;
  currentUserChoice: number;
  onClick: () => void;
}

export default function DeliveryOption({
  id,
  name,
  price,
  contents,
  isAllowedSinglePick,
  currentUserChoice,
  onClick,
}: DeliveryOptionProps) {
  //TODO: 서버 나온후 로직 변경해야함

  const [isSelected, setIsSelected] = useState(false);

  const handleDeliveryOption = () => {
    onClick();

    if (isAllowedSinglePick && isSelected === false) {
      setIsSelected(!isSelected);
      console.log(currentUserChoice);
    }
  };

  const Icon = () => {
    switch (id) {
      case 1:
        return <Gspost />;
      case 2:
        return <Cupost />;
      case 3:
        return <Mail />;
      case 4:
        return <QuasiRegistration />;
      case 5:
        return <Postoffice />;

      default:
        return;
    }
  };

  return (
    <Root isSelected={isSelected} currentUserChoice={currentUserChoice} Id={id} onClick={handleDeliveryOption}>
      <NonStyledContentContainer>
        <StyledTitleContainer>
          <StyledOptionTitle>{name}&nbsp;</StyledOptionTitle>
          <StyledSubtitle>|&nbsp;{price}</StyledSubtitle>
        </StyledTitleContainer>
        <StyledDescriptionContainer>
          {contents.map((content) => (
            <StyledContent>· &nbsp;{content}</StyledContent>
          ))}
        </StyledDescriptionContainer>
        <StyledIconContainer isSelected={isSelected} currentUserChoice={currentUserChoice} Id={id}>
          {Icon()}
        </StyledIconContainer>
      </NonStyledContentContainer>
    </Root>
  );
}

const Root = styled.div<{ isSelected: boolean; currentUserChoice: number; Id: number }>`
  position: relative;

  width: calc(50% - 0.6rem);
  margin-bottom: 1.2rem;
  height: 12.2rem;

  border-radius: 0.8rem;

  cursor: pointer;

  ${({ isSelected, currentUserChoice, Id }) =>
    Id === currentUserChoice && isSelected
      ? css`
          border: 0.2rem solid;
          border-color: ${({ theme }) => theme.colors.main};
          background-color: ${({ theme }) => theme.colors.main_opacity20};
          padding: 1.4rem 0 0 1.2rem;
        `
      : css`
          border: 0.1rem solid;
          border-color: ${({ theme }) => theme.colors.gray3};
          background-color: ${({ theme }) => theme.colors.gray_background};
          padding: 1.5rem 0.1rem 0.1rem 1.3rem;
        `}
`;

const NonStyledContentContainer = styled.div``;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const StyledOptionTitle = styled.p`
  ${({ theme }) => theme.fonts.title16pt};
  color: ${({ theme }) => theme.colors.gray4};
`;

const StyledSubtitle = styled.p`
  ${({ theme }) => theme.fonts.title14pt};
  color: ${({ theme }) => theme.colors.gray2};
`;

const StyledDescriptionContainer = styled.div`
  margin: 0.9rem 0 0 0.3rem;
`;

const StyledContent = styled.p`
  ${({ theme }) => theme.fonts.title14pt};
  color: ${({ theme }) => theme.colors.gray2};
  margin-bottom: 0.5rem;
`;

const StyledIconContainer = styled.div<{ isSelected: boolean; currentUserChoice: number; Id: number }>`
  position: absolute;

  ${({ isSelected, currentUserChoice, Id }) =>
    Id === currentUserChoice && isSelected
      ? css`
          bottom: 0.66rem;
          right: 0.66rem;
        `
      : css`
          bottom: 0.76rem;
          right: 0.76rem;
        `}
`;
