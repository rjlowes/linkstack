'use strict';

const users = require('../controllers/users.controllers');


module.exports = function (app, passport) {

	app.route('/api/login')
		.post(users.login);

	app.route('/api/register')
		.post(users.register);
		

	// server.route({
	// 	method: 'GET',
	// 	path: '/api/login',
	// 	payload: {

	// 	},
	// 	handler: function () {

	// 	}
	// })
};