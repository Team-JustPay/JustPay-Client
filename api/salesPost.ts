import { salesPostAPI } from './baseInstance';
import { salesPostType } from 'types/recoil/salesPost';
import { buyoffer } from '../recoil/buyoffer';

export const getCertificationWord = async () => {
  return await salesPostAPI.get('/certificationWord');
};

export const setSalesPost = async (formdata: FormData) => {
  return await salesPostAPI.post('', formdata, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
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

export const setSalesSuggest = async (salesPostID: number, formData: FormData) => {
  return await salesPostAPI.post(
    `/${salesPostID}/suggest`,

    formData,
    {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    },
  );
};
