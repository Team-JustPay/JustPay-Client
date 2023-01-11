import { useMutation } from '@tanstack/react-query';
import { setUserLogin } from 'api/auth';
import Router from 'next/router';

export const useSetUserLogin = () => {
  return useMutation(setUserLogin, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      Router.push('/login/check');
    },
  });
};
