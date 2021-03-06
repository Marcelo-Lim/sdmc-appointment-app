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
export const cancelAppointment =(id,cancelApps) => async (dispatch) =>{
    try{
        const {data} = await api.cancelAppointment(id, cancelApps)

        dispatch({type: 'UPDATE', payload: data})

        console.log("di ko alam kung tama pa to");

    }catch(error){
        console.log(error.message);
    }
}
export const updateAppointment =(id,updateApps) => async (dispatch) =>{
    try{
        const {data} = await api.updateAppointment(id, updateApps)

        dispatch({type: 'UPDATE', payload: data})

        console.log("tatanga tanga kase e");

    }catch(error){
        console.log(error.message);
    }
}

// Para lang makuha yung data
export const getAppointment2 =()=> async (dispatch)=>{
    try{
        const {data} = await api.fetchAppointments();
        dispatch({type: FETCH_ALL, payload: data});
        return data;
    }catch(error){
        console.log(error);
    }
}