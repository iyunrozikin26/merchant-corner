import { SET_CARTS, SET_CARTS_ERROR, SET_CARTS_LOADING, SET_CARTS_SELECTED } from "../types";

const initialState = {
    error: null,
    loading: false,
    carts: [],
    selected: {},
};

function cartReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CARTS:
            return { ...state, carts: payload };
        case SET_CARTS_ERROR:
            return { ...state, error: payload };
        case SET_CARTS_LOADING:
            return { ...state, loading: payload };
        case SET_CARTS_SELECTED:
            return { ...state, selected: payload };
        default:
            return state;
    }
}

export default cartReducer;
