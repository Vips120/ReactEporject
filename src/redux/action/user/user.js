import { USER_REGISTER,ERROR, LOGIN_USER, LOGOUT,LOGGED_USER,PRE_LOADER } from "./user.type";
import { userRegister,userLogin,loggedInUser } from "../../api/user/register";
import { history } from "../../../shared/helpers/history/index";


export const Loginuser = (item) => {
    return async dispatch => {
        try {
            dispatch({ type: PRE_LOADER });
            let user = await userLogin(item);
            localStorage.setItem("currentuser", JSON.stringify(user));
            dispatch({ type: LOGIN_USER, payload: user.data });
            alert("Login Done!");
            dispatch({type: PRE_LOADER})
            history.push("/home");
            window.location.reload();
        }
        catch (ex) {
            dispatch({ type: ERROR, payload: ex.response.data });
        }
    
    }
    
};
export const logOut = () => {
    return async dispatch => {
        localStorage.removeItem("currentuser");
        dispatch({ type: LOGOUT });
        history.push("/login");
        window.location.reload();
    }
}

export const UserRegister = (item) => {
    return async dispatch => {
        try {
            let sendData = await userRegister(item);
            console.log(sendData);
            dispatch({ type: USER_REGISTER, payload: sendData.data });
            alert("Registration Done!");
            history.push("/login");
            window.location.reload();
        }
        catch (ex) {
            dispatch({ type: ERROR, payload: ex.response.data })
        }
    }
};

export const UserLogged = () => {
    return async dispatch => {
        try {
            let fetchloggedIndata = await loggedInUser();
            dispatch({ type: LOGGED_USER, payload: fetchloggedIndata.data });
        }
        catch (ex) {
            dispatch({ type: ERROR, payload: ex.response.data });
        }
    }
};