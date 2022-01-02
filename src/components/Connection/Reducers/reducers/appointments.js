import {FETCH_ALL,CREATE,UPDATE} from '../Constant/actionType.js';

export default (appointments = [] ,action) => {
    
    switch(action.actionType) {

        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...appointments, action.payload];
            case UPDATE:
                return appointments.map((appointment) => (appointment._id === action.payload._id ? action.payload : appointment));
        default:
            return appointments;
    }
};