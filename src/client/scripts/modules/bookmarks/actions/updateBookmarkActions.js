import axios from 'axios';

export const UPDATE_BOOKMARK_SUCCESS = 'UPDATE_BOOKMARK_SUCCESS';
export const UPDATE_BOOKMARK_FAILURE = 'UPDATE_BOOKMARK_FAILURE';

const updateBookmarkSuccess = (bookmark) => ({
    type: UPDATE_BOOKMARK_SUCCESS,
    payload: bookmark
});

const updateBookmarkFailure = (bookmark) => ({
    type: UPDATE_BOOKMARK_FAILURE
});

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
