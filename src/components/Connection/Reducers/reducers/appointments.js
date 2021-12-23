import {FETCH_ALL,CREATE} from '../Constant/actionType.js';

export default (appointments = [] ,action) => {
    
    switch(action.actionType) {

        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...appointments, action.payload];
        default:
            return appointments;
    }
};