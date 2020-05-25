const User = require('../model/User');
const EmailToken = require('../model/Email_Token');
const verifyMail = require('../features/verifyMail');
const crypto = require('crypto')

exports.loginController = function (req, res) {
    res.send('Login');
};


exports.forgetPasswordController = function (req, res) {
    res.send('Forget');
};

exports.createAccountController = function (req, res) {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
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
        else { console.log(err) }
    })

}


