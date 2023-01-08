import { suggestsAPI } from './baseInstance';

export const getShippingInfo = async (suggestId: number) => {
  return await suggestsAPI.get(`${suggestId}/shippingInfo`);
};
