import { salesPostAPI } from './baseInstance';
import { salesPostType } from 'types/recoil/salesPost';

export const setSalesPost = async (salesPostInfo: salesPostType) => {
  return await salesPostAPI.post(
    '/',
    {
      ...salesPostInfo,
    },
    {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    },
  );
};

export const getSalesPostList = async (salesPostId: number, isMatched: boolean) => {
  return await salesPostAPI.get(`/${salesPostId}/suggests?isMatched=${isMatched}`);
};
