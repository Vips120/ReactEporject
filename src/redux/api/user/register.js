import axios from "axios";
const Register_ENDPOINT = "http://localhost:4000/api/chat/userRegister";

let config = {
    headers: {
        "Content-type": "application/json"
    }
};

export const userRegister = (data) => {
    return axios.post(Register_ENDPOINT, JSON.stringify(data), config);
}