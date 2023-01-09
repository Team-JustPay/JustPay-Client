import { userAPI } from './baseInstance';

export const getmyBuy = async (isPurchased: boolean) => {
  return await userAPI.get(`my/suggests?isPurchased=${isPurchased}`);
};

export const getmyInfo = async () => {
  return await userAPI.get('/my/info');
};
