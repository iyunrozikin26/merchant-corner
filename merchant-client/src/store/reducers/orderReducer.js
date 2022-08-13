import { SET_ORDERS, SET_ORDERS_ERROR, SET_ORDERS_LOADING, SET_ORDERS_SELECTED } from "../types";

const initialState = {
    error: null,
    loading: false,
    orders: [],
    selected: {},
};

function orderReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ORDERS:
            return { ...state, orders: payload };
        case SET_ORDERS_ERROR:
            return { ...state, error: payload };
        case SET_ORDERS_LOADING:
            return { ...state, loading: payload };
        case SET_ORDERS_SELECTED:
            return { ...state, selected: payload };
        default:
            return state;
    }
}

export default orderReducer;
