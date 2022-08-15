import axios from "axios";
import { SET_ORDERS, SET_ORDERS_ERROR, SET_ORDERS_LOADING, SET_ORDERS_SELECTED } from "../types";

export const setOrders = (payload) => {
    return { type: SET_ORDERS, payload };
};
export const setError = (payload) => {
    return { type: SET_ORDERS_ERROR, payload };
};
export const setLoading = (payload) => {
    return { type: SET_ORDERS_LOADING, payload };
};

export const allOrders = () => {
    return (dispatch) => {
        dispatch(setLoading(false));
        dispatch(setError(null));
        axios({
            method: "GET",
            url: `/orders`,
            headers: { access_token: localStorage.access_token },
        })
            .then(({ data }) => {
                if (typeof data.data != "string") {
                    dispatch(setOrders(data.data));
                } else {
                    dispatch(setOrders([]));
                }
            })
            .catch((err) => {
                dispatch(setError("failed to get all list order"));
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setLoading(false));
                }, 2000);
            });
    };
};

export const order = (id, amount) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: `/orders/a/${id}`,
                data: { amount },
                headers: { access_token: localStorage.access_token },
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    };
};
