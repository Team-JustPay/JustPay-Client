import React from 'react';
import styled from 'styled-components';
import { useGetShippingInfo } from 'apiHooks/suggests';

import XIcon from '../../public/assets/icons/X.svg';

interface DeliverInfoModal {
  closeButtonFunc: React.Dispatch<React.SetStateAction<boolean>>;
  scrollHeight: number;
  suggestId: number;
  isDeliverInfoModalOpen: boolean;
}

interface ModalProps {
  height: number;
}

export default function DeliverInfoModal({
  closeButtonFunc,
  scrollHeight,
  suggestId,
  isDeliverInfoModalOpen,
}: DeliverInfoModal) {
  const { data: deliveryInfo } = useGetShippingInfo(suggestId, isDeliverInfoModalOpen);
  return (
    <ModalContainer height={scrollHeight}>
      <Modal>
        <ModalHeader>
          <HeaderText>배송 정보 확인</HeaderText>
          <XIcon onClick={() => closeButtonFunc((prev) => !prev)} />
        </ModalHeader>
        <InfoContainer>
          <ContentContainer>
            <ContentProperty>배송 옵션</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.shippingOption.name}</ContentText>
          </ContentContainer>
          <ContentContainer>
            <ContentProperty>배송 금액</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.shippingOption.price} 원</ContentText>
          </ContentContainer>
          <ContentContainer>
            <ContentProperty>총 금액</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.totalPrice} 원</ContentText>
          </ContentContainer>
        </InfoContainer>
        <InfoContainer>
          <ContentContainer>
            <ContentProperty>받는 분</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.suggester.shippingInfo.receiverName}</ContentText>
          </ContentContainer>
          <ContentContainer>
            <ContentProperty>전화번호</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.suggester.phoneNumber}</ContentText>
          </ContentContainer>
          <ContentContainer>
            <ContentProperty>택배주소</ContentProperty>
            <ContentText>{deliveryInfo?.data.data.suggester.shippingInfo.cuStoreName}</ContentText>
          </ContentContainer>
        </InfoContainer>
      </Modal>
    </ModalContainer>
  );
}

const ModalContainer = styled.section<ModalProps>`
  position: absolute;
  top: ${(props) => props.height + 'px'};
  bottom: 0;
  left: 0;
  right: 0;

  height: 100vh;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 1.6rem;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;
`;
const Modal = styled.article`
  width: calc(100% - 3.2rem);

  padding: 3.2rem 2rem 0;

  background-color: ${({ theme }) => theme.colors.grey_popup};

  font-weight: 700;

  border-radius: 0.8rem;

  & > section:nth-child(2) {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray0};
  }
`;

const ModalHeader = styled.section`
  position: relative;

  svg {
    position: absolute;
    right: 0;
    top: -0.5rem;
  }
`;

const HeaderText = styled.p`
  font-size: 1.6rem;
  line-height: 1.9rem;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 3.2rem 0;
`;

const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;

  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const ContentProperty = styled.p`
  color: ${({ theme }) => theme.colors.gray2};

  text-align: left;
`;

const ContentText = styled.p`
  width: 22rem;
  word-break: break-all;
  text-align: right;

  color: ${({ theme }) => theme.colors.gray3};
`;
