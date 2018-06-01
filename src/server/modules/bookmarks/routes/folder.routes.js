'use strict';

const controllers = require('../controllers/folder.controller');

module.exports = function (app) {
    app.route('/api/folders')
        .get(controllers.list)
        .post(controllers.create);

    app.param('folderId', controllers.folderById);
};
