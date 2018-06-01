'use strict';

const path = require('path');
// const passport = require('passport');


// exports.register = function (req, res, next) {
//     passport.authenticate('local-signup', (err, customer, info) => {
//         console.log('pp authenticate');
//         if (err) {
//             return next(err);
//         }

//         if (!customer) {
//             res.sendStatus(401);
//         } else {
//             req.login(customer, (err) => {
//                 if (err) {
//                     res.status(500).json({message: "Login failed"});
//                 } else {
//                     res.status(200).json({'isAuthenticated': req.isAuthenticated(), 'customer': customer});
//                 }
//             });
//         }
//     })(req, res, next);
// };


// exports.login = function (req, res, next) {
//     console.log('login');
//     passport.authenticate('local-login', (err, customer, info) => {
//         console.log('authenticate');
//         if (err) return next(err);
//         console.log('after erro');
//         if (!customer) {
//             console.log('no customer');
//             res.sendStatus(401);
//         } else {
//             req.login(customer, () => {
//                 if(err) {
//                     res.sendStatus(500).json({message: 'Login failed.'});
//                 } else {
//                     res.status(200).json({'isAuthenticated': req.isAuthenticated()});
//                 }
//             });
//         }
//     })(req, res, next);
// };


// exports.logout = function (req, res) {
//     req.logout();
//     res.status(200);
// };

exports.updateDetails = function (req, res) {
    let customer = req.user;
    customer.firstname = req.body.firstname;
    customer.lastname = req.body.lastname;
    req.save((err, customer) => {
        if(err) {

        }

        return res.status(201).json(customer);
    });
};

exports.updateEmail = function () {
    
};

exports.updatePassword = function () {

};

/**
 * Logged in customer check
 */
exports.details = function (req, res) {
    if(req.user) {
        res.status(200).json(req.user.getSafeCustomer());
    } else {
        res.status(401).json({message: 'Not authenticated'});
    }
};