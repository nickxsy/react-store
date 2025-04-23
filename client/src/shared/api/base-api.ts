import axios from 'axios';

const API_URL = 'http://localhost:5000';

const publicApi = axios.create({
  baseURL: API_URL
});

const authApi = axios.create({
  baseURL: API_URL
});

const authInterceptor = (config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authApi.interceptors.request.use(authInterceptor);

export { publicApi, authApi };
