import { FetchProduct,FetchProductId } from "../../api/products/products";
import { FETCH_PRODUCT_DATA, LOADING, SHOW_ERROR, FETCH_PRODUCT_DATA_ID } from "./product.type";

export const ProductInfo = () => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await FetchProduct();
            dispatch({ type: FETCH_PRODUCT_DATA, payload: response.data });
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
            dispatch({ type: FETCH_PRODUCT_DATA_ID, payload: response.data });
        }
        catch (ex) {
            dispatch({ type: SHOW_ERROR, payload: ex.response.data });
        }
    }
};