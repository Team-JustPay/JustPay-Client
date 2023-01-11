import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getCertificationWord,
  setSalesPost,
  getSalesPostList,
  getSalesPostInfo,
  setSalesPostState,
  getCertificationImages,
  setSalesSuggest,
} from 'api/salesPost';
import { salesPostType } from 'types/recoil/salesPost';
import { useRouter } from 'next/router';

export const useGetCertificationWord = () => {
  return useQuery(['get/certificationWord'], getCertificationWord, {
    onError: (error) => {
      console.error(error);
    },
    refetchOnWindowFocus: false,
  });
};

export const useSetSalesPost = (salesPostInfo: FormData) => {
  return useMutation(() => setSalesPost(salesPostInfo), {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('서버 전송 성공');
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

export const useGetSalesPostInfo = (salesPostId: number) => {
  return useQuery(['get/salesposts/:salespostId'], () => getSalesPostInfo(salesPostId), {
    refetchOnMount: false,
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useSetSalesPostState = (salesPostId: number) => {
  return useMutation(() => setSalesPostState(salesPostId), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetCertificationImages = (salesPostId: number) => {
  return useQuery(['get/certifications'], () => getCertificationImages(salesPostId), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetSalesSuggestPostInfo = (salesPostId: number) => {
  return useQuery(['get/salesposts/:salespostId'], () => getSalesPostInfo(salesPostId), {
    refetchOnMount: false,
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useSetSalesSuggestPost = (salesPostId: number, formData: FormData) => {
  return useMutation(() => setSalesSuggest(salesPostId, formData), {
    onError: (error) => {
      console.error(error);
    },
  });
};
