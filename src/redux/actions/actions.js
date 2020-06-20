import * as userAPI from '../services/userAPI'
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
