// postAction.js
import { getAllMedia, getAllPost } from '../../api/blogApi'; // Make sure you have implemented this API function
import { setMediaData, setPostData } from '../slice/postSlice'; // Import additional action(s) if needed

export const listPostData = () => async (dispatch:any) => {
  try {
    // Dispatch loading status if needed
    console.log("apiCall...");
    const postData = await getAllPost(); // Call getAllPost function instead of loginApi
    dispatch(setPostData({ postData }));
    return postData
  } catch (error) {
    throw error; // Rethrow the error for UI handling
  }
};


export const listMediaData = () => async (dispatch:any) => {
    try {
      // Dispatch loading status if needed
      console.log("apiCall...");
      const mediaData = await getAllMedia(); // Call getAllPost function instead of loginApi
      dispatch(setMediaData({ mediaData }));
      return mediaData
    } catch (error) {
      throw error; // Rethrow the error for UI handling
    }
  };
  