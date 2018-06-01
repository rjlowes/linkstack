import axios from 'axios';
import { change } from 'redux-form';

export const FETCH_BOOKMARKS_SUCCESS = 'FETCH_BOOKMARKS_SUCCESS';
export const FETCH_BOOKMARKS_FAILURE = 'FETCH_BOOKMARKS_FAILURE';
export const CREATE_BOOKMARK_SUCCESS = 'CREATE_BOOKMARK_SUCCESS';
export const CREATE_BOOKMARK_FAILURE = 'CREATE_BOOKMARK_FAILURE';
export const UPDATE_BOOKMARK_SUCCESS = 'UPDATE_BOOKMARK_SUCCESS';
export const UPDATE_BOOKMARK_FAILURE = 'UPDATE_BOOKMARK_FAILURE';
export const SELECT_BOOKMARK = 'SELECT_BOOKMARK';
export const CLEAR_BOOKMARK = 'CLEAR_BOOKMARK';


const fetchBookmarksSuccess = (bookmarks) => ({
    type: FETCH_BOOKMARKS_SUCCESS,
    payload: bookmarks
});

const fetchBookmarksError = () => ({
    type: FETCH_BOOKMARKS_FAILURE
});

export function fetchBookmarks(folderId) {
    return async dispatch => {
        try {
            const request = await axios.get(`/api/folders/${folderId}/bookmarks`)

            dispatch(fetchBookmarksSuccess(request.data));
        } catch(e) {
            dispatch(fetchBookmarksError());
        }
    };
};

const createBookmarkSuccess = (bookmark) => ({
    type: CREATE_BOOKMARK_SUCCESS,
    payload: bookmark
});

export function createBookmark(folderId, link) {
    return async dispatch => {
        try {
            const request = await axios.post(`/api/folders/${folderId}/bookmarks`, link);

            dispatch(createBookmarkSuccess(request.data));
        } catch(e) {

        }
    };
}

const updateBookmarkSuccess = (bookmark) => ({
    type: UPDATE_BOOKMARK_SUCCESS,
    payload: bookmark
});

export function refreshScreen(bookmarkId) {
    return async dispatch => {
        try {
            const request = await axios.get(`/api/bookmarks/${bookmarkId}/screenshot`);

            dispatch(updateBookmarkSuccess(request.data));
        } catch(e) {

        }
    }
}

const updateBookmarkState = (dispatch, title = null, url = null, image = null) => {
    dispatch(change('bookmarkEditForm', 'title', title));
    dispatch(change('bookmarkEditForm', 'url', url));
    dispatch(change('bookmarkEditForm', 'image', image));
}

export function selectBookmark(bookmark) {
    return dispatch => {
        dispatch({type: SELECT_BOOKMARK, payload: bookmark});
        // dispatch(change('bookmarkEditForm', 'title', bookmark.title));
        // dispatch(change('bookmarkEditForm', 'url', bookmark.url));
        // dispatch(change('bookmarkEditForm', 'image', bookmark.image));
        updateBookmarkState(dispatch, bookmark.title, bookmark.url, bookmark.image);
    };
}

export function clearBookmark() {
    return dispatch => {
        dispatch({type: CLEAR_BOOKMARK});
        updateBookmarkState();
    };
}

export function updateBookmark(bookmark) {
    return async dispatch => {
        const url = `/api/folders/${bookmark.folderId}/bookmarks/${bookmark._id}`;

        try {
            const response = await axios.put(url, bookmark);

            dispatch({type: UPDATE_BOOKMARK_SUCCESS, payload: response.data});
        } catch(e) {
            dispatch({type: UPDATE_BOOKMARK_FAILURE});
        }
    }
}
