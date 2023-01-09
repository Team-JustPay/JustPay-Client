import { userAPI } from './baseInstance';

export const getmyBuy = async (isPurchased: boolean) => {
  return await userAPI.get(`my/suggests?isPurchased=${isPurchased}`);
};

export const getMySellInfo = async (isSaled: boolean) => {
  return await userAPI.get(`/my/salesposts/?isSaled=${isSaled}`);
};
