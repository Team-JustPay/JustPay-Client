import React from 'react';
import styled from 'styled-components';

interface ToastMessageProps {
  text: string;
}

export default function ToastMessage({ text }: ToastMessageProps) {
  return <StyledToastMessage>{text}</StyledToastMessage>;
}
const StyledToastMessage = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 17.7rem;
  height: 3.8rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 8rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.medium14pt};

  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
