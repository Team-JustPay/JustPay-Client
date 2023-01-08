import { useQuery } from '@tanstack/react-query';
import { getShippingInfo } from 'api/suggests';

export const useGetShippingInfo = (suggestId: number, isOpenShippingInfoModal: boolean) => {
  return useQuery(['get/shippingInfo', suggestId, isOpenShippingInfoModal], () => getShippingInfo(suggestId), {
    enabled: isOpenShippingInfoModal,
    onError: (error) => {
      console.error(error);
    },
  });
};
