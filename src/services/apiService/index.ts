import axiosInstance from './axiosInstance';
import Config from 'react-native-config';

interface Headers {
  [key: string]: string;
}

console.log('Base URL:', Config.BASE_URL); // Add this line to log the base URL

const getHeaders = async (headers: Headers = {}): Promise<Headers> => {
  // const tokens = await getTokens();
  const defaultHeaders: Headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    // token: `${tokens?.accessToken || ''}`,
    token: '',
  };
  return { ...defaultHeaders, ...headers };
};

const getData = async (url: string, headers: Headers = {}) => {
  try {
    return await axiosInstance.get(url, {
      headers: await getHeaders(headers),
    });
  } catch (err: any) {
    throw err.response;
  }
};

const postData = async (url: string, data: any, headers: Headers = {}) => {
  try {
    return await axiosInstance.post(url, data, {
      headers: await getHeaders(headers),
    });
  } catch (err: any) {
    throw err.response;
  }
};

const putData = async (url: string, data: any, headers: Headers = {}) => {
  try {
    console.log('url', url);

    return await axiosInstance.put(url, data, {
      headers: await getHeaders(headers),
    });
  } catch (err: any) {
    throw err.response;
  }
};

const deleteData = async (url: string, headers: Headers = {}) => {
  try {
    return await axiosInstance.delete(url, {
      headers: await getHeaders(headers),
    });
  } catch (err: any) {
    throw err.response;
  }
};

const patchData = async (url: string, data: any, headers: Headers = {}) => {
  try {
    return await axiosInstance.patch(url, data, {
      headers: await getHeaders(headers),
    });
  } catch (err: any) {
    throw err.response;
  }
};

export default {
  getData,
  postData,
  deleteData,
  putData,
  patchData,
};
