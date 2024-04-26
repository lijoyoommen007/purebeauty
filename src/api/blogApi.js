// blogApi.js

import axios from 'axios';
import { getAuthTokenFromLocalStorage } from '../utils/utils'; // assuming getAuthTokenFromLocalStorage is defined in utils.js
import { useSelector } from 'react-redux';
import { ApiUrl, Constants } from '@/constants/constant';

const baseURL = Constants.baseUrl;

export const usePostData = () => {
  const postData = useSelector(state => state.post.postData);
  return postData;
};

export const useMediaData = () => {
  const mediaData = useSelector(state => state.post.mediaData);
  return mediaData;
};

export const getAllPost = async () => {
  try {
    const token = getAuthTokenFromLocalStorage();
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    
    const response = await axios.get(`${baseURL}${ApiUrl.getAllPostApi}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllMedia = async () => {
  try {
    const token = getAuthTokenFromLocalStorage();
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    
    const response = await axios.get(`${baseURL}${ApiUrl.getAllMediaApi}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
