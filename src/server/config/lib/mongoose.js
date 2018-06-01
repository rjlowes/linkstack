'use strict';

const config = require('../config');
const mongoose = require('mongoose');
const chalk = require('chalk');
const path = require('path');


exports.loadModels = function (callback) {
	require('../../modules/users/models/user.model');
	require('../../modules/customer/models/customer.model');

    require('../../modules/bookmarks/models/folder.model');
    require('../../modules/bookmarks/models/bookmark.model');
	// require('../../modules/customer/models/title.model');
	// require('../../modules/addressbook/models/address.model');
	// require('../../modules/catalogue/models/category.model');


	if (callback) callback();
};


exports.connect = function (cb) {
	let db = mongoose.connect(config.db.url, err => {
		if (err) {
			console.log(chalk.bgRed('Could not connect to Mongoose'));
			console.log(chalk.bgRed(err));
		} else {
			mongoose.set('debug', config.db.debug);

			if (cb) cb(db);
		}
	});
};


exports.disconnect = function (callback) {
	mongoose.disconnect(err => {
		console.info(chalk.yellow('Disconnected from MongoDB'));

		if (callback) callback();
	})
};
