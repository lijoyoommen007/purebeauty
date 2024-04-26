import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: [],
  mediaData: [] // Initialize mediaData as an empty array
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostData(state, action) {      
      state.postData = action.payload.postData;
    },
    setMediaData(state, action) {
      state.mediaData = action.payload.mediaData;
    }
  }
});

export const { setPostData, setMediaData } = postSlice.actions;
export default postSlice.reducer;
