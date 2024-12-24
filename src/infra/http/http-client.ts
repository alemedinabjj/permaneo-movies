import { axiosInstance } from './axios-instance';

const httpClient = {
  get: async (url: string, params: Record<string, string>) => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  },
};

export default httpClient;
