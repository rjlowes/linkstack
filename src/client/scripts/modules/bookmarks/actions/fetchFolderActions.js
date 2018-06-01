import axios from 'axios';

export const FETCH_FOLDER_SUCCESS = 'FETCH_FOLDER_SUCCESS';
export const FETCH_FOLDER_ERROR = 'FETCH_FOLDER_ERROR';

const fetchFoldersSuccess = (folders) => ({
    type: FETCH_FOLDER_SUCCESS,
    payload: folders
});

const fetchFoldersError = () => ({
    type: FETCH_FOLDER_ERROR
});

export function fetchFolders() {
    return async dispatch => {
        try {
            const request = await axios.get(`/api/folders`);

            dispatch(fetchFoldersSuccess(request.data));
        } catch(e) {
            dispatch(fetchFoldersError());
        }
    }
}
