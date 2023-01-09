import { useQuery, useMutation } from '@tanstack/react-query';
import { getmyBuy, getMySellInfo } from 'api/user';

export const useGetmyBuy = (isPurchased: boolean) => {
  return useQuery([isPurchased], () => getmyBuy(isPurchased), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetMySellInfo = (isSaled: boolean) => {
  return useQuery(['get/my/salesposts', isSaled], () => getMySellInfo(isSaled), {
    onError: (error) => {
      console.error(error);
    },
  });
};
