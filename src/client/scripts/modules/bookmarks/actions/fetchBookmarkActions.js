import axios from 'axios';

export const FETCH_BOOKMARKS_SUCCESS = 'FETCH_BOOKMARKS_SUCCESS';
export const FETCH_BOOKMARKS_FAILURE = 'FETCH_BOOKMARKS_FAILURE';

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
