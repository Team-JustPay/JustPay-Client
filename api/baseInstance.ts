import axios from 'axios';

const AUTH_TOKEN = typeof window !== 'undefined' && localStorage.getItem('accessToken');
const API_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_URL;

export const baseAPI = axios.create({
  baseURL: `${API_URL}`,
});

export const salesPostAPI = axios.create({
  baseURL: `${API_URL}/salesposts`,
});

export const suggestsAPI = axios.create({
  baseURL: `${API_URL}/suggests`,
});

export const userAPI = axios.create({
  baseURL: `${API_URL}/users`,
});

export const authAPI = axios.create({
  baseURL: `${API_URL}/auth`,
});
