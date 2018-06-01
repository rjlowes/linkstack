import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bookmark from 'modules/bookmarks/components/Bookmark';
import { selectBookmark } from 'modules/bookmarks/bookmarkActions';

const BookmarkList = ({ bookmarks }) => {
    if(!bookmarks) {
        return null;// TODO add no bookmarks message
    }

    return (
        <ul className="grid-bookmarks">
            {bookmarks.map((bookmark, i) => {
                return (
                    <li className="grid-bookmarks__item" key={i}>
                        <Bookmark bookmark={bookmark} />
                    </li>
                );
            })}
        </ul>
    );
};

export default BookmarkList;
