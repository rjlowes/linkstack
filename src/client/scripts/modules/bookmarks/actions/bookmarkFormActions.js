import { change } from 'redux-form';

export const SELECT_BOOKMARK_SUCCESS = 'SELECT_BOOKMARK_SUCCESS';

const updateBookmarkForm = (dispatch, title = null, url = null, image = null) => {
    dispatch(change('bookmarkEditForm', 'title', title));
    dispatch(change('bookmarkEditForm', 'url', url));
    dispatch(change('bookmarkEditForm', 'image', image));
};

export function selectBookmark(bookmark) {
    return dispatch => {
        updateBookmarkForm(dispatch, bookmark.title, bookmark.url, bookmark.image);
    };
}

export function clearBookmark() {
    return dispatch => {
        updateBookmarkForm();
    };
}
