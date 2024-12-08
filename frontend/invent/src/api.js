import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/apidata/', // Your backend API base URL
});

// Add an interceptor to include the access token in requests
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const { data } = await axios.post('http://localhost:8000/api/token/refresh/', { refresh: refreshToken });
          localStorage.setItem('accessToken', data.access);
          error.config.headers.Authorization = `Bearer ${data.access}`;
          return axios(error.config);
        } catch (err) {
          localStorage.clear();
          window.location.href = '/login';
        }
      }
      return Promise.reject(error);
    }
  );

export default Api;
