'use strict';

const path = require('path');
//const passport = require(path.join(__rootdir, '/config/lib/passport'));
const passport = require('passport');


exports.register = function (req, res, next) {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) return next(err);

        if (!user) {
            res.sendStatus(401);
        } else {
            // req.login(user, () => {
            //     if (err) {

            //     }
            // });
            console.log('signed up and signed in');
            console.log(req.isAuthenticated());
            res.status(200).json({'isAuthenticated': req.isAuthenticated(), 'customer': user});
        }
    })(req, res, next);
};

exports.login = function (req, res, next) {
    console.log('login route');
	passport.authenticate('local-login', (err, user, info) => {
		if (err) return next(err);

		if (!user) {
			res.sendStatus(401);
		} else {
			req.login(user, () => {
				if(err) {
					res.sendStatus(500).json({message: 'Login failed.'});
				} else {
					res.status(200).json({'isAuthenticated': req.isAuthenticated()});
				}
			});
		}
	})(req, res, next);
};

exports.logout = function (req, res) {

};

exports.isAuthenticated = function (req, res) {
    res.status(200).json({'isAuthenticated', req.isAuthenticated()});
};
