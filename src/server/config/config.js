'use strict';

const path = require('path');
const _ = require('lodash');
const chalk = require('chalk');



var initGlobalConfig = function () {
	let env = process.env.NODE_ENV || 'development';

    // Get the default config
    var defaultConfig = require(path.join(process.cwd(), 'src/server/config/env/default'));

    // Get the current config
    var environmentConfig = require(path.join(process.cwd(), 'src/server/config/env/', env)) || {};

    var config = _.merge(defaultConfig, environmentConfig);

    return config;
};

module.exports = initGlobalConfig();
