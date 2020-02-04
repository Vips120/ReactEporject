import { combineReducers } from "redux";
import { RegisterUser } from "../reducers/user/user";

const reducers = combineReducers({register: RegisterUser});

export default reducers;