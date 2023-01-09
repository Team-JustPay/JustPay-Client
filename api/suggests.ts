import { suggestsAPI } from './baseInstance';

export const getShippingInfo = async (suggestId: number) => {
  return await suggestsAPI.get(`${suggestId}/shippingInfo`);
};

export const getInvoiceInfo = async (suggestId: number) => {
  return await suggestsAPI.get(`${suggestId}/invoice`);
};

export const setInvoiceInfo = async (suggestId: number, invoiceNum: string) => {
  return await suggestsAPI.patch(`${suggestId}/invoice`, {
    invoiceNumber: invoiceNum,
  });
};

export const setSuggestsState = async (suggestId: number, status: number, invoiceDeadline?: number) => {
  return await suggestsAPI.patch(`${suggestId}/status`, {
    status: status,
    invoiceDeadline: invoiceDeadline,
  });
};
