import { useQuery, useMutation } from '@tanstack/react-query';
import { setSalesPost, getSalesPostList } from 'api/salesPost';
import { salesPostType } from 'types/recoil/salesPost';

export const useSetSalesPost = (salesPostInfo: salesPostType) => {
  return useMutation(() => setSalesPost(salesPostInfo), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetSalesPostList = (salesPostId: number, isMatched: boolean) => {
  return useQuery(['get/salesposts', salesPostId, isMatched], () => getSalesPostList(salesPostId, isMatched), {
    onError: (error) => {
      console.error(error);
    },
  });
};
