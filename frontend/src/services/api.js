import axios from 'axios';

// Determine API base URL
// - In production (served by the backend), use relative '/api'
// - In development, default to http://localhost:5000/api
// - Allow override via Vite env: VITE_API_URL
const defaultDevUrl = 'http://localhost:5000/api';
const envUrl = import.meta?.env?.VITE_API_URL;
const isLocalhost = typeof window !== 'undefined' && window.location.origin.includes('localhost');
const baseURL = envUrl || (isLocalhost ? defaultDevUrl : '/api');

const api = axios.create({
  baseURL,
});

// Add a request interceptor to add the auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
