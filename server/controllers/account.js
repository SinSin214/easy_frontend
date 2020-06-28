const User = require('../model/User');
const EmailToken = require('../model/Email_Token');
const verifyMail = require('../features/sendMail');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.loginController = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username, isActive: true }, function (err, user) {
        if (user) {
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    let payload = { username, password }
                    let token = jwt.sign(payload, 'ohyeah', { expiresIn: 300 });
                    let data = { username: username, token: token, userId: user._id };
                    res.send(data);
                }
                else {
                    res.status(400).send({ error: 'Wrong password' });
                }
            })
        }
        else {
            res.status(400).send({ error: 'No user found' });
        }
    })
};

exports.forgetPasswordController = function (req, res) {
    let email = req.body.email;
    user.findOne({ email: email, isActive: true }, function (err, user) {

    })
    res.send('Forget');
};

exports.createAccountController = function (req) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            registDate: new Date(),
            isActive: false
        });

        user.save(function (err, user) {
            if (!err) {
                let token = new EmailToken({
                    _id: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                })
                token.save(function (err, token) {
                    if (!err) {
                        verifyMail.sendVerifyMail(req.headers.host, req.body.email, token.token);
                    }
                });
            }
        })
    })

}

exports.verifyEmail = function (req, res) {
    EmailToken.findOne({ token: req.query.token }, function (err, token) {
        if (!err && token) {
            User.findOneAndUpdate({ _id: token._id }, { $set: { isActive: true } }, function (err, user) {
                if (!err && user) {
                    res.redirect('http://localhost:3000');
                }
            })
        }
    })
}


