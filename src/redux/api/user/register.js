import axios from "axios";
import { Header } from "../../../shared/helpers/history/header";
const Register_ENDPOINT ="http://localhost:4000/api/userRegister";
const Login_ENDPOINT = "http://localhost:4000/api/userLogin";
const LoggedIn_ENDPOINT = "http://localhost:4000/api/me";

let config = {
    headers: {
        "Content-type": "application/json"
    }
};

export const userRegister = (data) => {
    return axios.post(Register_ENDPOINT, JSON.stringify(data), config);
};

export const userLogin = (data) => {
    return axios.post(Login_ENDPOINT, JSON.stringify(data), config);
};

export const loggedInUser = () => {
    return axios.get(LoggedIn_ENDPOINT, { headers: Header(), config });
}