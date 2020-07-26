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

export const checkValidToken = (token) => {
    return axios({
        method: 'post',
        url: '/account/token',
        data: token
    })
        .then(res => {
            console.log(res);
            return res.data;
        })
        .catch(err => {
            throw (err.response.data.error);
        })
}