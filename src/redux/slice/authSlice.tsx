import { createSlice } from '@reduxjs/toolkit';

// Check if localStorage is defined (for SSR compatibility)
const isAuthenticated = typeof localStorage !== 'undefined' ? !!localStorage.getItem('token') : false;
const username = typeof localStorage !== 'undefined' ? localStorage.getItem('username') || '' : '';

const initialState = {
  isAuthenticated,
  username,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {      
      const { username, token } = action.payload;
      state.isAuthenticated = true;
      state.username = username;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { logout,loginSuccess } = authSlice.actions;
export default authSlice.reducer;
