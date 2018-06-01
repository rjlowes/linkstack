'use strict';

const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


// https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619

const strategyConfig = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};


exports.initSession = function (passport) {
    passport.serializeUser((customer, done) => {
        done(null, customer.id);
    });

    passport.deserializeUser((id, done) => {
        Customer.findById(id, (err, customer) => {
            done(err, customer);
        });
    });
};


exports.initLocalLoginStrategy = function (passport) {
    let localStrategy = new LocalStrategy(strategyConfig, (req, email, password, done) => {
        Customer.findOne({'email': email}, (err, customer) => {
            if (err) return done(err);

            if (!customer) return done(null, false, req.flash('loginMessage', 'No customer found'));
            
            if (!customer.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Password invalid'));
            }

            return done(null, customer);
        });
    });

    passport.use('local-login', localStrategy);
};


exports.initLocalSignupStrategy = function (passport) {
    let localStrategy = new LocalStrategy(strategyConfig, (req, email, password, done) => {
        process.nextTick(() => {
            Customer.findOne({'email': email}, (err, customer) => {

                if (err) return done(err);

                if (customer) {
                    return done(null, false, req.flash('signupMessage', 'The email is already in use!'));
                } else {
                    let newCustomer = new Customer();
                    newCustomer.email = email;
                    newCustomer.password = newCustomer.generateHash(password);
                    newCustomer.title = req.body.title;
                    newCustomer.firstname = req.body.firstname;
                    newCustomer.lastname = req.body.lastname;
                    
                    newCustomer.save(err => {
                        if (err) throw err;
                        return done(null, newCustomer);
                    });
                }
            });
        });
    });

    passport.use('local-signup', localStrategy);
};


exports.init = function (passport) {
    this.initSession(passport);
    this.initLocalLoginStrategy(passport);
    this.initLocalSignupStrategy(passport);
};
