'use strict';

const config = require('../config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
// const hbs = require('express-hbs');


exports.initMiddleware = function (app) {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(cookieParser());

};

exports.initViewEngine = function (app) {
	// Serve static files
	app.use(express.static(path.resolve('./public')));
    app.use('/static', express.static(path.resolve('./static')));

	// Express handlebars
	// app.engine('hbs', hbs.express4({
	// 	layoutsDir: './app/server/views/layout'
	// }));
	// app.set('view engine', 'hbs');
	// app.set('views', './app/server/views');
};


exports.initSession = function (app) {

	//var app = express()
	var sess = {
	  secret: 'keyboard cat',
	  cookie: {}
    };

	if (app.get('env') === 'production') {
		app.set('trust proxy', 1) // trust first proxy
		sess.cookie.secure = true // serve secure cookies
	}

	app.use(session(sess))
};

exports.initModulesServerRoutes = function (app, passport) {
	// require(path.join(__rootdir, '/modules/state/routes/state.routes'))(app);
	// require(path.join(__rootdir, '/modules/customer/routes/authentication.routes'))(app);
	// require(path.join(__rootdir, '/modules/customer/routes/customer.routes'))(app);
	// require(path.join(__rootdir, '/modules/customer/routes/title.routes'))(app);
	// require(path.join(__rootdir, '/modules/addressbook/routes/address.routes'))(app);
	// require(path.join(__rootdir, '/modules/catalogue/routes/category.routes'))(app);
	// require(path.join(__rootdir, '/modules/basket/routes/basket.routes'))(app);
    require('../../modules/bookmarks/routes/folder.routes')(app);
    require('../../modules/bookmarks/routes/bookmark.routes')(app);

	app.use('*', function (req, res) {
        res.sendFile(path.resolve('./public/index.html'));
	});
};

exports.initPassport = function (app) {
	//app.use(session(config.express.session));
	app.use(passport.initialize());
	app.use(passport.session());

	require('./passport').init(passport);
};

exports.init = function () {
	let app = express();

	this.initMiddleware(app);
	this.initViewEngine(app);
	// this.initSession(app);
	// this.initPassport(app);
	this.initModulesServerRoutes(app);

	return app;
};
