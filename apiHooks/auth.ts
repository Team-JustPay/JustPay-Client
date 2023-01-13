import { useMutation } from '@tanstack/react-query';
import { setUserLogin } from 'api/auth';
import Router from 'next/router';

export const useSetUserLogin = (userId: number) => {
  return useMutation(() => setUserLogin(userId), {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      if (localStorage.getItem('accessToken')) {
        Router.push({
          pathname: '/sell/post/176',
          query: { salesPostId: 176 },
        });
      }
    },
  });
};
