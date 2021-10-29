import { AUTH } from '../constant/actionType.js';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/AboutUs');
    } catch (error) {
      console.log(error);
      alert("The data is not found")
      router.push('/Authentication');
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };