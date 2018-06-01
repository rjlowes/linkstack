import axios from 'axios';

export const UPDATE_BOOKMARK_IMAGE_SUCCESS = 'UPDATE_BOOKMARK_IMAGE_SUCCESS';
export const UPDATE_BOOKMARK_IMAGE_FAILURE = 'UPDATE_BOOKMARK_IMAGE_FAILURE';


const updateBookmarkImageSuccess = (bookmark) => ({
    type: UPDATE_BOOKMARK_IMAGE_SUCCESS,
    payload: bookmark
});

const updateBookmarkImageError = (bookmark) => ({
    type: UPDATE_BOOKMARK_IMAGE_SUCCESS
});

//TODO mix into updateBookmark
export function updateBookmarkImage(bookmarkId) {
    return async dispatch => {
        try {
            const request = await axios.get(`/api/bookmarks/${bookmarkId}/screenshot`);

            dispatch(updateBookmarkImageSuccess(request.data));
        } catch(e) {
            dispatch(updateBookmarkImageError(request.data));
        }
    }
}
