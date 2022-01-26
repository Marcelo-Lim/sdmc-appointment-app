import { combineReducers } from "redux";
import auth from './auth';
import appointments from './appointments';
import forgotpassword from './forgotpassword'
export default combineReducers({auth,appointments,forgotpassword });
