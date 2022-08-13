import axios from "axios";

export const login = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: "/users/login",
                data: user,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    };
};

export const register = (newUser) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: "/users/register",
                data: newUser,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        });
    };
};
