import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
  baseURL: '/api', // Matches the proxy in vite.config.js
  timeout: 5000,
});

// Request interceptor
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sa_token');
    if (token) {
      config.headers['sa_token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      message.error(res.msg || 'Error');
      // Handle specific error codes like 401 (unauthorized) if needed
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res.data;
    }
  },
  (error) => {
    message.error(error.message || 'Request Error');
    return Promise.reject(error);
  }
);

export default service;
