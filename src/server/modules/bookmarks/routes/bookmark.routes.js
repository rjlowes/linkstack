'use strict';

const folderControllers = require('../controllers/folder.controller');
const bookmarkControllers = require('../controllers/bookmark.controller');

module.exports = function (app) {
    app.route('/api/folders/:folderId/bookmarks')
       .get(bookmarkControllers.list)
       .post(bookmarkControllers.create);

    app.route('/api/folders/:folderId/bookmarks/:bookmarkId')
        .put(bookmarkControllers.update);

    // TODO mix this with the update task
    app.route('/api/bookmarks/:bookmarkId/screenshot')
       .get(bookmarkControllers.screenshot);  // this should be PUT

    app.param('folderId', folderControllers.folderById);
    app.param('bookmarkId', bookmarkControllers.bookmarkById);
}
