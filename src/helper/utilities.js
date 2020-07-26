import jwt from 'jsonwebtoken';

export function checkIsLogged() {
    const token = JSON.parse(localStorage.getItem('token'));

}