import axios from 'axios';
import {
  removeTokenSecurely,
  retrieveTokenSecurely,
  storeTokenSecurely,
} from '../utils';

const axiosInstance = axios.create({
  baseURL: 'https://',
  timeout: 10000,
});

const refreshAccessToken = async () => {
  try {
    const tokens = await retrieveTokenSecurely();

    if (!tokens) {
      throw new Error('No refresh token available');
    }
    const { accessToken, refreshToken } = tokens;
    const response = await axios.post(
      `${axiosInstance.defaults.baseURL}/token/refresh`,
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log('Refresh Token Response -> ', response.data);

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
    await storeTokenSecurely({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh token');
    throw error;
  }
};

// Interceptor to attach the token to each request
axiosInstance.interceptors.request.use(
  async config => {
    const tokens = await retrieveTokenSecurely();
    if (tokens) {
      config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('[FAIL] -- Interceptor Response - ', error.response?.status);
    const originalRequest = error.config;
    console.log('originalRequest', originalRequest._retry);

    // Check if the error is due to an expired token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      console.log('[FAIL] -- Interceptor Response - ', error.response?.status);

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle token refresh failure (e.g., log out the user)
        // Set User state to null

        await removeTokenSecurely();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
