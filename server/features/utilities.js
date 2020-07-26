import * as constant from '../const';
const jwt = require('jsonwebtoken');

export function checkExpiredToken(token) {
    jwt.verify(token, constant.secrectWord, function (err, decoded) {
        if (err) {
            console.log(err);
        }
        console.log(decoded);
    })
}