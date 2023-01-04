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

  width: 17.7rem;
  height: 3.8rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.medium14pt};

  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
