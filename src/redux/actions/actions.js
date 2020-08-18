import * as userAPI from '../services/userAPI'
import * as taskAPI from '../services/taskAPI'
import { isLogged } from '../reducers/userReducer';
import { isError, isPending } from '../reducers/processReducer';

export function login(user) {
    return dispatch => {
        dispatch(isPending());
        return new Promise((resolve, reject) => {
            userAPI.login(user)
                .then(res => {
                    localStorage.setItem('token', JSON.stringify(res));
                    let param = {
                        isLogged: true,
                        username: res.username
                    }
                    dispatch(isLogged(param));
                    return resolve()
                })
                .catch(err => {
                    dispatch(isError());
                    return reject(err)
                })
        })
    }
};

export function createAccount(user) {
    return dispatch => {
        dispatch(isPending());
        return new Promise((resolve, reject) => {
            userAPI.createAccount(user)
                .then(() => {
                    return resolve()
                })
                .catch(err => {
                    // dispatch(isError());
                    return reject()
                })
        })
    }
};

export function logOut() {
    return dispatch => {
        localStorage.removeItem('token');
        window.location.reload();
    }
}

export function getListTask(userId) {
    return dispatch => {
        dispatch(isPending());
        return new Promise((resolve, reject) => {
            taskAPI.getListTask(userId)
                .then(res => {

                })
                .catch(err => {

                })
        })
    }
};

export function createTask() {
    return dispatch => {
        dispatch(isPending());
        return new Promise((resolve, reject) => {
            taskAPI.createTask()
                .then(res => {

                })
                .catch(err => {

                })
        })
    }
}