import axios from 'axios'

export function login(user) {
    return axios({
        method: 'post',
        url: '/account/login',
        data: user
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw (err);
        })
};

export const forgetPassword = (user) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: '/account/forget-password',
            data: user
        })
            .then(res => {
                localStorage.setItem('token', res.data);
            })
    };
};

export const register = (user) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: '/account/create-account',
            data: user
        })
            .then(res => {
            })
    };
};