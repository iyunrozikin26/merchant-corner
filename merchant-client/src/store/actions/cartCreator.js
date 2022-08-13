import axios from "axios";
import { SET_CARTS, SET_CARTS_ERROR, SET_CARTS_LOADING, SET_CARTS_SELECTED } from "../types";

export const setCarts = (payload) => {
    return { type: SET_CARTS, payload };
};
export const setError = (payload) => {
    return { type: SET_CARTS_ERROR, payload };
};
export const setLoading = (payload) => {
    return { type: SET_CARTS_LOADING, payload };
};
export const setSelectedProduct = (payload) => {
    return { type: SET_CARTS_SELECTED, payload };
};

export const allCarts = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        axios({
            method: "GET",
            url: "/carts",
            headers: { access_token: localStorage.access_token },
        })
            .then(({ data }) => {
                if (typeof data.data != "string") {
                    dispatch(setCarts(data.data));
                } else {
                    dispatch(setCarts([]));
                }
            })
            .catch((err) => {
                dispatch(setError("failed to get all data"));
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setLoading(false));
                }, 2000);
            });
    };
};

export const deleteCart = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "DELETE",
                url: `/carts/${id}`,
                headers: { access_token: localStorage.access_token },
            })
                .then(({ data }) => {
                    resolve(data);
                    dispatch(allCarts());
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
};

export const addCart = (id, amount) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: `/carts/${id}`,
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
