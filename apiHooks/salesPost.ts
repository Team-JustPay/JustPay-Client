import { useMutation } from '@tanstack/react-query';
import { setSalesPost } from 'api/salesPost';
import { salesPostType } from 'types/recoil/salesPost';

export const useSetSalesPost = (salesPostInfo: salesPostType) => {
  return useMutation(() => setSalesPost(salesPostInfo), {
    onError: (error) => {
      console.error(error);
    },
  });
};
