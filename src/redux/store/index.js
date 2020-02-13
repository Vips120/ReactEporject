import { combineReducers } from "redux";
import { RegisterUser,LoginUser } from "../reducers/user/user";
import { ShowProductDetails, ShowProductDetailsId, AddToCart } from "../reducers/product/product";
import storage from "redux-persist/lib/storage";
const reducers = combineReducers({register: RegisterUser, login: LoginUser, details: ShowProductDetails,shopProduct: ShowProductDetailsId, cart: AddToCart});

export default reducers;

export const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
};