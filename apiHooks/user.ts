import { useQuery, useMutation } from '@tanstack/react-query';
import { getmyBuy, getmyInfo } from 'api/user';

export const useGetmyBuy = (isPurchased: boolean) => {
  return useQuery([isPurchased], () => getmyBuy(isPurchased), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetmyInfo = () => {
  return useQuery(['get/my/info'], getmyInfo, {
    onError: (error) => {
      console.error(error);
    },
  });
};
