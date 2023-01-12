import axios from 'axios';

// const AUTH_TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY3Mjk0NTU0OSwiZXhwIjoxNzA0NDgxNTQ5fQ.jr6ivyfNxeL6P3nokedNl2_hC6qpiKfBjBUD3qkzFJ0';

// if (typeof window !== 'undefined') {
//   const AUTH_TOKEN = localStorage.getItem('accessToken');
// }
const AUTH_TOKEN = typeof window !== 'undefined' && localStorage.getItem('accessToken');

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const baseAPI = axios.create({
  baseURL: `${API_URL}`,
});

export const salesPostAPI = axios.create({
  baseURL: `${API_URL}/salesposts`,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const suggestsAPI = axios.create({
  baseURL: `${API_URL}/suggests`,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const userAPI = axios.create({
  baseURL: `${API_URL}/users`,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export const authAPI = axios.create({
  baseURL: `${API_URL}/auth`,
});
