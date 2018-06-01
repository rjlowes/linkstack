'use strict';

var core = require('../controllers/core.controllers');

module.exports = function (app) {

    // TODO errors and undefindes

    app.route('/*').get(core.index);
};