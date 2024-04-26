// authActions.js
import { loginApi } from '../../api/authApi';
import { loginSuccess } from '../slice/authSlice'; 

export const login = (username:string, password:string) => async (dispatch:any) => {
  try {
    const token = await loginApi(username, password);
    console.log(token);
    dispatch(loginSuccess({ username, token }));
  } catch (error) {
    throw (error); // Rethrow the error for UI handling
  }
};

// Other action creators related to authentication can go here
