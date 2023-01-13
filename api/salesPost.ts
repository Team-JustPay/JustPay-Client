import { salesPostAPI } from './baseInstance';

export const getCertificationWord = async () => {
  return await salesPostAPI.get('/certificationWord');
};

export const setSalesPost = async (salesPostInfo: FormData) => {
  return await salesPostAPI.post('/', salesPostInfo, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getSalesPostList = async (salesPostId: number, isMatched: boolean) => {
  return await salesPostAPI.get(`/${salesPostId}/suggests?isMatched=${isMatched}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const getSalesPostInfo = async (salesPostId: number) => {
  return await salesPostAPI.get(`/${salesPostId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const setSalesPostState = async (salesPostId: number) => {
  return await salesPostAPI.patch(
    `/${salesPostId}/status`,
    {
      status: 1,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
};

export const getCertificationImages = async (salesPostId: number) => {
  return await salesPostAPI.get(`/${salesPostId}/certifications`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const setSalesSuggest = async (salesPostID: number, formData: FormData) => {
  return await salesPostAPI.post(`/${salesPostID}/suggest`, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
