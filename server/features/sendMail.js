const nodemailer = require('nodemailer');

exports.sendVerifyMail = function (host, email, token) {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "tranhuynhkha1111@gmail.com",
            pass: "2141996a"
        }
    });

    let mailOptions = {
        from: "tranhuynhkha1111@gmail.com",
        to: email,
        subject: "Please confirm your Email account",
        html: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + host + '\/account/verify?token=' + token + '.\n'
    }
    return smtpTransport.sendMail(mailOptions);
}

exports.sendForgetPassword = function (password, email) {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "tranhuynhkha1111@gmail.com",
            pass: "2141996a"
        }
    });

    let mailOptions = {
        from: "tranhuynhkha1111@gmail.com",
        to: email,
        subject: "Forget Password",
        html: 'Hello,\n\n' + 'This is your password:' + password + '\n'
    }
    return smtpTransport.sendMail(mailOptions);
}