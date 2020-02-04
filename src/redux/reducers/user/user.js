import { USER_REGISTER } from "../../action/user/user.type";

export const RegisterUser = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return { ...state, item: action.payload };
        default:
            return state;
     }
}