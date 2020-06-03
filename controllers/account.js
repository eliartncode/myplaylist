const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Account = require('../models/account');

exports.loadLoginPage = (request, response, next) => {
    response.render('login', {

    })
};

exports.loadRegisterPage = (request, response, next) => {
    response.render('signup', {

    })
};

exports.loadVerifyPage = (request, response, next) => {
    response.render('verify', {

    })
};

exports.logout = (request, response, next) => {
    request.session.udata = null;
    response.redirect('/account/login');
};

exports.loginAction = (request, response, next) => {

    const email = request.body.email;
    const password = request.body.password;
    Account.findOne({ where: {email: email} })
    .then(account => {
        if(account){   
            bcryptjs.compare(password, account.password)
            .then(isPasswordMatch => {
                if(isPasswordMatch){

                    const data = {
                        id: account.id,
                        firstName: account.first_name,
                        lastName: account.last_name,
                        email: account.email,
                        isLoggedIn: true
                    }

                    request.session.udata = data;
                    response.redirect('/');
                } else {
                    console.log('Passwords not match');
                }
            })
        } else {
            console.log('Account not exist');
        }
    })
    .catch(error => {
        console.log(error);
    })
};

exports.registerAction = (request, response, next) => {

    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    const password = request.body.password;

    Account.findOne({ where: {email: email} })
    .then(account => {

        if(account){
            console.log('Account exist');
        } else {

            return bcryptjs.hash(password, 10)
            .then(hash_password => {

                Account.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: hash_password,
                    isApproved: true,
                    isLocked: false
                })
                .then(new_account => {
                    response.redirect('/account/login');
                })
            })
        }
    })
    .catch(error => {
        console.log(error);
    })
};