import axios from 'axios';
import * as AxiosLogger from 'axios-logger';
import configureAppStore from '@/src/redux/store/Store';
import { MovieApi } from '@/src/redux/query/RKTQuery';
import { router } from 'expo-router';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if Authorization header is already present
    if (!config.headers.Authorization) {
      const token = ''; // Get the token from the store
      // Add Bearer token to headers if available
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    if (config.params) {
      console.log('API Query Params:', config.params); // Log the query params
    }
    // Keep the original logger
    AxiosLogger.requestLogger(config);
    console.log('Authorization header:', config.headers);

    return config;
  },
  AxiosLogger.errorLogger // Handle request errors
);
axiosInstance.interceptors.response.use(
  AxiosLogger.responseLogger, // Log response
  async (error) => {
    const originalRequest = error.config;

    const skip401Endpoints = ['auth/refresh'];
    if (
      skip401Endpoints.some((endpoint) =>
        originalRequest.url?.includes(endpoint)
      )
    ) {
      return Promise.reject(error);
    }

    // Handle 401 (Unauthorized) errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried
      try {
        // Trigger the RTK Query `postRefreshToken` mutation
        const { data, error } = await configureAppStore().dispatch(
          MovieApi.endpoints.postRefreshToken.initiate()
        );
        if (data) {
          // Update Authorization header with the new token
          originalRequest.headers.Authorization = `Bearer ${data?.token}`;
          // Retry the original request
          return axiosInstance(originalRequest);
        } else if (error) {
          router.push('/');
          return Promise.reject(error);
        }
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
