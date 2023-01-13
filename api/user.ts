import { userAPI } from './baseInstance';
import { MyInfoType } from 'types/recoil/myInfo';

export const getmyBuy = async (isPurchased: boolean) => {
  return await userAPI.get(`my/suggests?isPurchased=${isPurchased}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getmyInfo = async (addressSplit: boolean) => {
  return await userAPI.get(`/my/info?addressSplit=${addressSplit}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const putmyInfo = async (myInfo: MyInfoType) => {
  return await userAPI.put(
    '/my/info',
    {
      ...myInfo,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
};

export const getMySellInfo = async (isSaled: boolean) => {
  return await userAPI.get(`/my/salesposts/?isSaled=${isSaled}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getMyInfo = async () => {
  return await userAPI.get(`/my/info?addressSplit=true`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getAlarm = async () => {
  return await userAPI.get(`my/notifications`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
