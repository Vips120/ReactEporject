import { FetchProduct,FetchProductId } from "../../api/products/products";
import { FETCH_PRODUCT_DATA, LOADING, SHOW_ERROR, FETCH_PRODUCT_DATA_ID, ADD_CART, REMOVE_CART } from "./product.type";
import { history } from "../../../shared/helpers/history";

export const ProductInfo = () => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await FetchProduct();
            setTimeout(() => {
                dispatch({ type: FETCH_PRODUCT_DATA, payload: response.data });
            }, 1000);
           
        }
        catch (ex) {
            dispatch({ type: SHOW_ERROR, payload: ex.response.data });
        }
    }
};

export const ProductInfobyId = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await FetchProductId(id);
            setTimeout(() => {
                dispatch({ type: FETCH_PRODUCT_DATA_ID, payload: response.data });
            }, 1000);
         
        }
        catch (ex) {
            dispatch({ type: SHOW_ERROR, payload: ex.response.data });
        }
    }
};

export const AddToCart = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await FetchProductId(id);
            console.log(response.data);
            setTimeout(() => {
                dispatch({ type: ADD_CART, payload: response.data });
            //  window.location.reload();
            }, 1000);
            // history.push("/cart");
        }

        catch (ex) {
            dispatch({ type: SHOW_ERROR, payload: ex.response.data });
        }
    }
};

export const RemoveToCart = (id) => {
    console.log(id);
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await FetchProductId(id);
            setTimeout(() => {
                dispatch({ type: REMOVE_CART, payload: response.data });
            }, 1000);
        }
        catch (ex) {
            
        }
    }
};