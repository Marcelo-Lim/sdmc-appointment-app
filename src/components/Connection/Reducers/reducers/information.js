import {FETCH_ALL,UPDATE} from '../Constant/actionType';

export default ( information = [], action )=>{
    switch(action.type){
        case FETCH_ALL:
                return action.payload;
        case UPDATE:
            return information.map((info)=>(information._id === action.payload._id? action.payload: info));
        default:
            return information;
    }
};