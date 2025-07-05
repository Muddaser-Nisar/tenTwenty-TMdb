import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';
import { showToast } from 'utils/helpers/toastMessage';
import { scale } from 'utils';

console.log('Base URL:', Config.BASE_URL);

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

//  request interceptor
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Optionally set headers here
    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    let errorMessage = 'Something went wrong. Please try again.';

    if (error.response?.data && typeof error.response.data === 'object') {
      const data = error.response.data as { message?: string };
      if (data.message) {
        errorMessage = data.message;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    //in case of unauthorized user
    if (error.response?.status !== 401) {
      showToast('error', '', errorMessage, scale(77));
    }

    return Promise.reject(error.response || error);
  },
);

export default axiosInstance;
