import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getShippingInfo,
  getInvoiceInfo,
  setInvoiceInfo,
  setSuggestsState,
  getSuggestsInfo,
  deleteSuggests,
} from 'api/suggests';

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

export const useSetSuggestState = (suggestId: number, status: number, invoiceDeadline?: number) => {
  return useMutation(() => setSuggestsState(suggestId, status, invoiceDeadline), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetSuggestsInfo = (suggestId: number) => {
  return useQuery(['get/suggests', suggestId], () => getSuggestsInfo(suggestId), {
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDeleteSuggests = (suggestsId: number) => {
  return useMutation(() => deleteSuggests(suggestsId), {
    onError: (error) => {
      console.error(error);
    },
  });
};
