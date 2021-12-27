import {AUTH, UPDATE} from '../Reducers/Constant/actionType'
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/Home');
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
      alert("Please Enter valid information")
     
       //router.push('/Authentication');
     
    }
  };


  export const updateInformation =(id, info) => async (dispatch) =>{
    try{
      const {data} =await api.updateInformation(id, info);
      dispatch({type: UPDATE, payload:data});

    }
    catch(error){
      console.log(error);
    }
  }