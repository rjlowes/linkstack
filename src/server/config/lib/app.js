'use strict';

var config = require('../config'),
	express = require('./express'),
	mongoose = require('./mongoose'),
	chalk = require('chalk');


module.exports.init = function (callback) {
	
	mongoose.loadModels();

	mongoose.connect(function(db) {
		var app = express.init(db);
		if (callback) callback(app, db, config);
	});
};

module.exports.start = function (rootDir) {

	global.__rootdir = rootDir;

	this.init(function (app, db, config) {
		app.listen(3000, function () {
			console.log(chalk.green('The magic happens on port 3000'));
		});
	});
};