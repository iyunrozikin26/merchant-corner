import axios from "axios";
import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_PRODUCTS_LOADING, SET_PRODUCTS_SELECTED } from "../types";

export const setPrducts = (payload) => {
    return { type: SET_PRODUCTS, payload };
};
export const setError = (payload) => {
    return { type: SET_PRODUCTS_ERROR, payload };
};
export const setLoading = (payload) => {
    return { type: SET_PRODUCTS_LOADING, payload };
};
export const setSelectedProduct = (payload) => {
    return { type: SET_PRODUCTS_SELECTED, payload };
};

export const allProducts = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        axios({
            method: "GET",
            url: "/products",
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(setPrducts(data.data));
            })
            .catch((err) => {
                dispatch(setError("failed to get all data"));
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setLoading(false));
                }, 100);
            });
    };
};

export const oneProduct = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `/products/${id}`,
            })
                .then(({ data }) => {
                    // console.log(data.data);
                    // dispatch(setSelectedProduct(data.data));
                    resolve(data);
                })
                .catch((err) => {
                    // console.log(err);
                    reject(err);
                });
        });
    };
};
