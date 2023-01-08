import { useQuery, useMutation } from '@tanstack/react-query';
import { getShippingInfo, getInvoiceInfo, setInvoiceInfo } from 'api/suggests';

export const useGetShippingInfo = (suggestId: number, isOpenShippingInfoModal: boolean) => {
  return useQuery(['get/shippingInfo', suggestId, isOpenShippingInfoModal], () => getShippingInfo(suggestId), {
    enabled: isOpenShippingInfoModal,
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetInvoiceInfo = (suggestId: number) => {
  return useQuery(['get/invoiceInfo', suggestId], () => getInvoiceInfo(suggestId), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useSetInvoiceInfo = (suggestId: number, invoiceNum: string) => {
  return useMutation(() => setInvoiceInfo(suggestId, invoiceNum), {
    onError: (error) => {
      console.error(error);
    },
  });
};