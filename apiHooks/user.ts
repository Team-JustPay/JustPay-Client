import { useQuery, useMutation } from '@tanstack/react-query';
import { getmyBuy, setPhoneNumber, getmyInfo } from 'api/user';

export const useGetmyBuy = (isPurchased: boolean) => {
  return useQuery([isPurchased], () => getmyBuy(isPurchased), {
    onError: (error) => {
      console.error(error);
    },
  });
};
export const useSetPhoneNumber = (phoneNumber: string) => {
  return useMutation(() => setPhoneNumber(phoneNumber), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetmyInfo = () => {
  return useQuery(['getId'], () => getmyInfo(), {
    onError: (error) => {
      console.error(error);
    },
  });
};
