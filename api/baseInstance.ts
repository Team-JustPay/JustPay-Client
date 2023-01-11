import axios from 'axios';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY3Mjk0NTU0OSwiZXhwIjoxNzA0NDgxNTQ5fQ.jr6ivyfNxeL6P3nokedNl2_hC6qpiKfBjBUD3qkzFJ0';

export const baseAPI = axios.create({
  baseURL: 'https://api.just-pay.site/',
});

export const salesPostAPI = axios.create({
  baseURL: 'https://api.just-pay.site/salesposts',
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const suggestsAPI = axios.create({
  baseURL: 'https://api.just-pay.site/suggests',
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const userAPI = axios.create({
  baseURL: 'https://api.just-pay.site/users',
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const authAPI = axios.create({
  baseURL: 'https://api.just-pay.site/auth',
});
