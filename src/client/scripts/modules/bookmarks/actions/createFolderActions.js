import axios from 'axios';

export const CREATE_FOLDER_SUCCESS = 'CREATE_FOLDER_SUCCESS';
export const CREATE_FOLDER_ERROR = 'CREATE_FOLDER_ERROR';

const createFolderSuccess = (folder) => ({
    type: CREATE_FOLDER_SUCCESS,
    payload: folder
});

const createFolderError = () => ({
    type: CREATE_FOLDER_ERROR
});

export function createFolder(folder) {
    return async dispatch => {
        try {
            const request = await axios.post(`/api/folders`, folder);

            dispatch(createFolderSuccess(request.data));
        } catch(e) {
            dispatch(createFolderError());
        }
    };
}
