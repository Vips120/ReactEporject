import axios from "axios";
const PRODUCT_ENDPOINT = "http://localhost:4000/api/chat/allUserData";
const FECTH_PRODUCT_BY_ID_ENDPOINT = "http://localhost:4000/api/chat/allUserData/";
let config = {
    headers: {
        "Content-Type": "application/json"
    }
};

export const FetchProduct = () => {
    return axios.get(PRODUCT_ENDPOINT, config);
};

export const FetchProductId = (id) => {
    return axios.get(FECTH_PRODUCT_BY_ID_ENDPOINT + id, config);
}