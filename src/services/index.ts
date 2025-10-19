import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Você pode configurar interceptors, timeout, cabeçalhos padrão, etc, aqui
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 10000, // opcional
});

export { apiClient };