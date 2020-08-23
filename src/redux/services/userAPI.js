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
            throw (err.response.data.error);
        })
};

export function createAccount(user) {
    return axios({
        method: 'post',
        url: '/account/create-account',
        data: user
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw (err.response.data.error);
        })
};

export function forgetPassword(email) {
    return axios({
        method: 'post',
        url: '/account/forget-password',
        data: email
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw (err.response.data.error);
        })
}