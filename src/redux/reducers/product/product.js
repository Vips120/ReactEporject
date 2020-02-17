import { LOADING, SHOW_ERROR, FETCH_PRODUCT_DATA,FETCH_PRODUCT_DATA_ID, ADD_CART, REMOVE_CART, ADD_QUANTITY, REMOVE_QUANTITY} from "../../action/product/product.type";
import {CartUtility, AddQuantityUtilty, RemoveQuantityUtilty } from "./cart.utill";
export const ShowProductDetails = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return { loading: true };
        case FETCH_PRODUCT_DATA:
            return { ...state, item: action.payload, loading: false };
        case SHOW_ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
};

export const ShowProductDetailsId = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return { loading: true };
        case FETCH_PRODUCT_DATA_ID:
            return { ...state, item: action.payload, loading: false };
        case SHOW_ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
};
const INITIAL_STATE = {
    items: []
};
export const AddToCart = (state = INITIAL_STATE, action) => {
    console.log(state, action.payload);
    switch (action.type) {
        case LOADING:
            return { ...state, loading:true};
        case ADD_CART:
            return { ...state,items: CartUtility(state.items, action.payload),loading: false };
            case REMOVE_CART:
                return {
                  ...state,
                    items: state.items.filter(data => data.item._id !== action.payload.item._id),
                    loading: false
            };
        case ADD_QUANTITY:
            return { ...state, loading: false, addquantity: AddQuantityUtilty(state.items, action.payload) };
            case REMOVE_QUANTITY:
                return {...state, loading:false, removequantity: RemoveQuantityUtilty(state.items, action.payload)}
        default:
            return state;
   }  
};