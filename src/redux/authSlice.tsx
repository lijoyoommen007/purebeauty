// redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Function to check if localStorage is available
const isLocalStorageAvailable = () => {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    return false;
  }
};

const initialState = {
  isAuthenticated: false,
  username: ""
};

// Hydrate authentication state with data from localStorage if available
if (isLocalStorageAvailable()) {
  initialState.isAuthenticated = localStorage.getItem('token') ? true : false;
  initialState.username = localStorage.getItem('username') || ""; // Get username from localStorage
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) { // Modify login action to accept payload
      const { username } = action.payload; // Extract username from payload
      state.isAuthenticated = true;
      state.username = username; // Set username in the state
      localStorage.setItem('token', 'your_auth_token_here');
      localStorage.setItem("username", username); // Set username in localStorage
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = ""; // Clear username from state
      localStorage.removeItem('token');
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
