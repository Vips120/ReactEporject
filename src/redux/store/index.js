import { combineReducers } from "redux";
import { RegisterUser,LoginUser } from "../reducers/user/user";
import { ShowProductDetails,ShowProductDetailsId } from "../reducers/product/product";
const reducers = combineReducers({register: RegisterUser, login: LoginUser, details: ShowProductDetails,shopProduct: ShowProductDetailsId});

export default reducers;