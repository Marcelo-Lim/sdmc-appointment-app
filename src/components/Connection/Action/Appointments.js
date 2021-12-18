import { FETCH_ALL,CREATE,AUTH } from "../Reducers/Constant/actionType";
import * as api from '../api/index.js'

export const createAppointment = (appointment, router) => async (dispatch) => {
    try{
        const { data } = await api.addAppointment(appointment);
        dispatch({ type: AUTH, data });
        console.log("tama na be");
    }catch(error){
        console.log(error);
        console.log('TANGINA MO MALI');
    }
};
 