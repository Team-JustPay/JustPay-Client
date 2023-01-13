import { suggestsAPI } from './baseInstance';

export const getShippingInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`${suggestsId}/shippingInfo`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getInvoiceInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`${suggestsId}/invoice`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const setInvoiceInfo = async (suggestsId: number, invoiceNum: string) => {
  return await suggestsAPI.patch(
    `${suggestsId}/invoice`,
    {
      invoiceNumber: invoiceNum,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
};

export const setSuggestsState = async (suggestsId: number, status: number, invoiceDeadline?: number) => {
  return await suggestsAPI.patch(
    `${suggestsId}/status`,
    {
      status: status,
      invoiceDeadline: invoiceDeadline,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
};

export const getSuggestsInfo = async (suggestId: number) => {
  return await suggestsAPI.get(`/${suggestId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const deleteSuggests = async (suggestsId: number) => {
  return await suggestsAPI.delete(`/${suggestsId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const setRaisePrice = async (suggestsId: number, price: number) => {
  return await suggestsAPI.patch(
    `/${suggestsId}/price`,
    {
      price: price,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
};

export const getPaymentInfo = async (suggestsId: number) => {
  return await suggestsAPI.get(`/${suggestsId}/payment`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
