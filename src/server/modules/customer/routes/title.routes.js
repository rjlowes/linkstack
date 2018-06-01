'use strict';

const titles = require('../controllers/title.controllers');

module.exports = function (app) {
    app.route('/api/customer/titles')
       .get(titles.list);
};
