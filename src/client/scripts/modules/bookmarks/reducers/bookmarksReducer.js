import update from 'react-addons-update';

import {
    FETCH_BOOKMARKS_SUCCESS,
    FETCH_BOOKMARKS_FAILURE
} from 'modules/bookmarks/actions/fetchBookmarkActions';

import {
    CREATE_BOOKMARK_SUCCESS,
    CREATE_BOOKMARK_FAILURE
} from 'modules/bookmarks/actions/createBookmarkActions';

import {
    UPDATE_BOOKMARK_SUCCESS,
    UPDATE_BOOKMARK_FAILURE
} from 'modules/bookmarks/actions/updateBookmarkActions';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKMARKS_SUCCESS:
            return action.payload;
        case CREATE_BOOKMARK_SUCCESS:
            return [...state, action.payload];
        case UPDATE_BOOKMARK_SUCCESS:
            console.log('ite');
            // const newState = { ...state };
            // const newBookmark = action.payload;
            // state.bookmarks.forEach((bookmark) => {
            //     if(bookmark._id === newBookmark._id) {
            //         console.log('updating bookmark in state');
            //         bookmark.title = newBookmark.title;
            //         bookmark.image = newBookmark.image;
            //     }
            // });

            // return newState;

            const { _id, image, title } = action.payload;

            // const index = this.state.bookmarks.findIndex(bookmark => bookmark.id === _id)

            // return update(state, {
            //     bookmarks: {
            //         [action.id]: {
            //             text: {$set: action.payload}
            //         }
            //     }
            // });
            console.log('updating bookmarks in reducer');
            return {
                ...state,
                // bookmarks: state.contents.map((bookmark, i) => bookmark._id === 1 newBookmark._id {...bookmark, image: newBookmark.payload} : content)
                bookmarks: state.bookmarks.map((bookmark, i) => {
                    if(bookmark._id === _id) {
                        console.log('found');
                        return {...bookmark, image, title}
                    } else {
                        return bookmark;
                    }
                })
            }
            // return {...state, cartData: {...state.cartData, ...action.payload}}
        // case SELECT_BOOKMARK:
        //     return { ...state, selectedBookmark: action.payload };
        // case CLEAR_BOOKMARK:
        //     return { ...state, selectedBookmark: null };
        default:
            return state;
    }
}
