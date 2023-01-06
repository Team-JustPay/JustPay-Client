import React from 'react';
import styled from 'styled-components';

interface ModalBackgroundProps {
  title: string;
  content: string;
  buttonFirstTitle: string;
  buttonSecondTitle?: string;
  buttonFirstFunction: () => void;
  buttonSecondFunction?: () => void;
}
export default function Modal({
  title,
  content,
  buttonFirstTitle,
  buttonSecondTitle,
  buttonFirstFunction,
  buttonSecondFunction,
}: ModalBackgroundProps) {
  return (
    <StyledHelpModalBackground>
      <StyledHelpModal>
        <h1>{title}</h1>
        {content.split('<br/>').map((line) => {
          return (
            <p>
              {line}
              <br />
            </p>
          );
        })}
        <StyledModalButtonContainer>
          <button type="button" onClick={buttonFirstFunction}>
            {buttonFirstTitle}
          </button>
          {buttonSecondTitle && (
            <button type="button" onClick={buttonSecondFunction}>
              {buttonSecondTitle}
            </button>
          )}
        </StyledModalButtonContainer>
      </StyledHelpModal>
    </StyledHelpModalBackground>
  );
}

const StyledHelpModalBackground = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  width: 100%;
  min-height: calc(var(--vh) * 100);

  padding: 0 1.6rem 3.2rem;
  margin-left: -16px;

  background: rgba(0, 0, 0, 0.7);
`;

const StyledHelpModal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 24rem;
  padding: 3.2rem 4rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_popup};

  h1 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title16pt};
  }

  p {
    text-align: center;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.regular14pt};
    line-height: 2.2rem;
  }
`;

const StyledModalButtonContainer = styled.section`
  display: flex;

  margin-top: 2.4rem;

  button {
    width: 12rem;
    height: 4.3rem;

    border-radius: 0.8rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold14pt};
    background: ${({ theme }) => theme.colors.main};
  }

  & :first-child {
    background: ${({ theme }) => theme.colors.gray2};
  }

  & :last-child {
    margin-left: 1.2rem;
    background: ${({ theme }) => theme.colors.main};
  }
`;