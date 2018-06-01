import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import bookmarks from 'modules/bookmarks/bookmarkReducer';
import folders from 'modules/bookmarks/reducers/foldersReducer';
import bookmarks from 'modules/bookmarks/reducers/bookmarksReducer';

export default {
    form: formReducer,
    folders,
    bookmarks
};
