import { suggestsAPI } from './baseInstance';

export const getShippingInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`${suggestsId}/shippingInfo`);
};

export const getInvoiceInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`${suggestsId}/invoice`);
};

export const setInvoiceInfo = async (suggestsId: number, invoiceNum: string) => {
  return await suggestsAPI.patch(`${suggestsId}/invoice`, {
    invoiceNumber: invoiceNum,
  });
};

export const setSuggestsState = async (suggestsId: number, status: number, invoiceDeadline?: number) => {
  return await suggestsAPI.patch(`${suggestsId}/status`, {
    status: status,
    invoiceDeadline: invoiceDeadline,
  });
};

export const getSuggestsInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`/${suggestsId}`);
};

export const deleteSuggests = async (suggestsId: number) => {
  return await suggestsAPI.delete(`/${suggestsId}`);
};
