import { userAPI } from './baseInstance';
import { MyInfoType } from 'types/recoil/myInfo';

export const getmyBuy = async (isPurchased: boolean) => {
  return await userAPI.get(`my/suggests?isPurchased=${isPurchased}`);
};

export const getmyInfo = async (addressSplit: boolean) => {
  return await userAPI.get(`/my/info?addressSplit=${addressSplit}`);
};

export const putmyInfo = async (myInfo: MyInfoType) => {
  return await userAPI.put('/', {
    ...myInfo,
  });
};
