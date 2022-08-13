import axios from "axios";

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
