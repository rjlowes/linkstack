import axios from 'axios';

export const FOLDERS_URL = '/api/folders';

export const FETCH_FOLDER_SUCCESS = 'FETCH_FOLDER_SUCCESS';
export const FETCH_FOLDER_ERROR = 'FETCH_FOLDER_ERROR';

const createFolderSuccess = () => {

};

export function createFolder(folder) {
    return async dispatch => {
        try {
            const request = await axios.post(FOLDERS_URL, folder);

            console.log('this is it.');
            console.log(request);
            dispatch(fetchFoldersSuccess(request.data));
        } catch(e) {

        }
    };
}

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
            const request = await axios.get(FOLDERS_URL);

            dispatch(fetchFoldersSuccess(request.data));
        } catch(e) {
            dispatch(fetchFoldersError());
        }
    }
}
