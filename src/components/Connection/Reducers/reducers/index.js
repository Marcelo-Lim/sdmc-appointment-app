import { combineReducers } from "redux";
import auth from './auth';
import appointments from './appointments';
export default combineReducers({auth,appointments });
