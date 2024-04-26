import { ApiUrl, Constants } from '@/constants/constant';
import axios from 'axios';

const baseURL = Constants.baseUrl;

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${baseURL}${ApiUrl.authPostApi}`, { username, password });
    return response.data.jwt_token;
  } catch (error) {
    throw error.response.data.error_description;
  }
};

