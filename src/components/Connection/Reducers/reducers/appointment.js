import {FETCH_ALL,CREATE} from '../Constant/actionType.js';

export default (appointmentReducers = [],action)=>{
    switch(action.actionType){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...appointmentReducers, action.payload];
        default:
            return appointmentReducers;
    }
}