import { userAPI } from './baseInstance';

export const getmyBuy = async (isPurchased: boolean) => {
  return await userAPI.get(`my/suggests?isPurchased=${isPurchased}`);
};

export const setPhoneNumber = async (Number: string) => {
  return await userAPI.put(`my/info/`, {
    phoneNumber: Number.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`),
  });
};

export const getmyInfo = async () => {
  return await userAPI.get(`my/info?addressSplit=true`);
};
