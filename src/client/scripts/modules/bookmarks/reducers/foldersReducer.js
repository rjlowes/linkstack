import {
    FETCH_FOLDER_SUCCESS,
    FETCH_FOLDER_ERROR,
} from 'modules/bookmarks/actions/fetchFolderActions';

import {
    CREATE_FOLDER_SUCCESS,
    CREATE_FOLDER_ERROR,
} from 'modules/bookmarks/actions/fetchFolderActions';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_FOLDER_SUCCESS:
            return action.payload;
        case FETCH_FOLDER_ERROR:
            return [];
        default:
            return state;
    }
}
