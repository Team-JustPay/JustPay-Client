import React from 'react';
import styled from 'styled-components';

interface UserProfile {
  profileImage: string;
  userName: string;
  userId: string;
}
export default function UserProfile({ profileImage, userName, userId }: UserProfile) {
  return (
    <StyledProfileContainer>
      <img src="profileImage" alt="트위터 프로필"></img>
      <StyledProfileAccount>
        <h1>{userName}</h1>
        <p>{userId}</p>
      </StyledProfileAccount>
    </StyledProfileContainer>
  );
}

const StyledProfileContainer = styled.section`
  display: flex;
  align-items: center;

  margin-top: 1.8rem;
  margin-bottom: 2rem;
  img {
    width: 4.2rem;
    height: 4.2rem;
    margin-right: 0.8rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const StyledProfileAccount = styled.section`
  h1 {
    ${({ theme }) => theme.fonts.medium14pt};
    color: ${({ theme }) => theme.colors.gray3};
  }
  p {
    ${({ theme }) => theme.fonts.regular14pt};
    color: ${({ theme }) => theme.colors.gray2};
  }
`;
