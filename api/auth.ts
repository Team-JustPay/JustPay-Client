import { authAPI } from './baseInstance';

export const setUserLogin = async (userId: number) => {
  const res = await authAPI.post('/login', {
    oauthToken: userId,
    oauthTokenSecret: '상준쨩',
  });
  localStorage.setItem('accessToken', res.data.data.accessToken);
  return res;
};
