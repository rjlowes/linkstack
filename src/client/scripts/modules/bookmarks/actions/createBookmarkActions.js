import axios from 'axios';

export const CREATE_BOOKMARK_SUCCESS = 'CREATE_BOOKMARK_SUCCESS';
export const CREATE_BOOKMARK_FAILURE = 'CREATE_BOOKMARK_FAILURE';

const createBookmarkSuccess = (bookmark) => ({
    type: CREATE_BOOKMARK_SUCCESS,
    payload: bookmark
});

const createBookmarkError = () => ({
    type: CREATE_BOOKMARK_SUCCESS
});

export function createBookmark(folderId, link) {
    return async dispatch => {
        try {
            const request = await axios.post(`/api/folders/${folderId}/bookmarks`, link);

            dispatch(createBookmarkSuccess(request.data));
        } catch(e) {
            dispatch(createBookmarkError());
        }
    };
}
