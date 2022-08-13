import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_PRODUCTS_LOADING, SET_PRODUCTS_SELECTED } from "../types";

const initialState = {
    error: null,
    loading: false,
    products: [],
    selected: {},
};

function productReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        case SET_PRODUCTS_ERROR:
            return { ...state, error: payload };
        case SET_PRODUCTS_LOADING:
            return { ...state, loading: payload };
        case SET_PRODUCTS_SELECTED:
            return { ...state, selected: payload };
        default:
            return state;
    }
}

export default productReducer;
