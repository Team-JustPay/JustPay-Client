import styled, { css } from 'styled-components';

interface BlockProps {
  state: string;
}

export const TextBlock = styled.p<BlockProps>`
  border-radius: 0.8rem;
  padding: 2rem;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  ${(props) =>
    props.state === 'able'
      ? css`
          background-color: ${({ theme }) => theme.colors.grey_popup};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background-color: rgba(74, 74, 74, 0.3);
          border: 1px solid ${({ theme }) => theme.colors.gray0};
          color: ${({ theme }) => theme.colors.gray1};
        `}
`;
