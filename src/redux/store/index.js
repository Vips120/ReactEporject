import { combineReducers } from "redux";
import { RegisterUser,LoginUser } from "../reducers/user/user";

const reducers = combineReducers({register: RegisterUser, login: LoginUser});

export default reducers;