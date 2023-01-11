import { useQuery } from '@tanstack/react-query';
import { getmyBuy } from 'api/user';

export const useGetmyBuy = (isPurchased: boolean) => {
  return useQuery([isPurchased], () => getmyBuy(isPurchased), {
    onError: (error) => {
      console.error(error);
    },
  });
};
