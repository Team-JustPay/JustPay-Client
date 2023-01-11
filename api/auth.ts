import { authAPI } from './baseInstance';

export const setUserLogin = async () => {
  const res = await authAPI.post('/login', {
    oauthToken: '준상쨩',
    oauthTokenSecret: '상준쨩',
  });
  localStorage.setItem('accessToken', res.data.data.accessToken);
  return res;
};
