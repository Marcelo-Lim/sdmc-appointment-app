import { FETCH_ALL,CREATE } from '../Reducers/Constant/actionType.js';
import * as api from '../api/index.js'

export const getAppointment =()=> async (dispatch)=>{
    try{
        const {data} = await api.fetchAppointments();
        dispatch({type: FETCH_ALL, payload: data});
        console.log("Tama naman");
    }catch(error){
        console.log(error);
    }
}
export const createAppointment = (savess,router) => async (dispatch) =>{
    try{
        const {data} = await api.addAppointment(savess);
        dispatch({type: CREATE,payload: data});
        console.log("MAMAMTAY ka na ")
        router.push('/Home')
    }catch (error) {
        console.log(error);
    }
}