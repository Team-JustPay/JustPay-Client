import { salesPostAPI } from './baseInstance';
import { salesPostType } from 'types/recoil/salesPost';

export const getCertificationWord = async () => {
  return await salesPostAPI.get('/certificationWord');
};

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

export const getSalesPostInfo = async (salesPostId: number) => {
  return await salesPostAPI.get(`/${salesPostId}`);
};

export const setSalesPostState = async (salesPostId: number) => {
  return await salesPostAPI.patch(`/${salesPostId}/status`, {
    status: 1,
  });
};

export const getCertificationImages = async (salesPostId: number) => {
  return await salesPostAPI.get(`/${salesPostId}/certifications`);
};
