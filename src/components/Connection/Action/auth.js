import {AUTH, UPDATE,FORGOTTEN} from '../Reducers/Constant/actionType'
import * as api from '../api/index.js';

import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const signin = (formData, router) => async (dispatch) => {
 // 
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/Home');
  } catch (error) {
    
    console.log(error);
   
    alert("The data is not found")
   // router.push('/Authentication');
  

  }
   
 
  };
  

  export const signup = (formData, router) => async (dispatch) => {
   
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
      
      router.push('/');
    } catch (error) {
      
      console.log(error);
      
     
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

  export const forgotpassed = (formData,router) => async (dispatch) =>{
    try{
      const {data} = await api.forgotPass(formData);
      dispatch({ type: FORGOTTEN, data });
     // alert('next update mo na ');
      router.push('/forgotpasswords')
    }
    catch(error){
      alert('Please check your email address')
    }
  }

  export const changepassword =(id,formData) => async (dispatch) =>{
    try{
      const {data} = await api.changePass(id, formData)

      dispatch({type: 'UPDATE', payload: data})

      console.log("tatanga tanga kase e");

  }catch(error){
      console.log(error.message);
  }
  }