'use strict';

const authentication = require('../controllers/authentication.controllers');


module.exports = function (app, passport) {

    app.route('/api/login')
        .post(authentication.login);

    app.route('/api/register')
        .post(authentication.register);

    app.route('/api/logout')
       .delete(authentication.logout);

    // app.route('/api/customer')
    //     .get(customer.details);
};