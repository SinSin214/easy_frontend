const jwt = require('jsonwebtoken');

export function checkExpiredToken(token) {
    jwt.verify(token, 'ohyeah', function (err, decoded) {
        if (err) {
            console.log(err);
        }
        console.log(decoded);
    })
}