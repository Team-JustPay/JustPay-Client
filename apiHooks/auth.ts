import { useMutation } from '@tanstack/react-query';
import { setUserLogin } from 'api/auth';
import Router from 'next/router';

export const useSetUserLogin = () => {
  return useMutation(setUserLogin, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      data.data.id === 4 ? Router.push('/login/check') : Router.push('/sell/post/142?salesPostId=142');
    },
  });
};
