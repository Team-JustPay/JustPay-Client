import styled from 'styled-components';

export const GuideText = styled.p`
  padding: 0 5.7rem;

  color: ${({ theme }) => theme.colors.gray3};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;

  text-align: center;
  word-break: keep-all;
`;
