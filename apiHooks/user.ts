import { useQuery, useMutation } from '@tanstack/react-query';
import { getmyBuy, getmyInfo, putmyInfo } from 'api/user';
import { MyInfoType } from 'types/recoil/myInfo';

export const useGetmyBuy = (isPurchased: boolean) => {
  return useQuery(['get/my/suggests/', isPurchased], () => getmyBuy(isPurchased), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetmyInfo = (addressSplit: boolean) => {
  return useQuery(['get/my/info', addressSplit], () => getmyInfo(addressSplit), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePutmyInfo = (myInfo: MyInfoType) => {
  return useMutation(['put/my/info'], () => putmyInfo(myInfo), {
    onError: (error) => {
      console.error(error);
    },
  });
};
