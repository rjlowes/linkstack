import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionBar from 'modules/bookmarks/components/ActionBar';
import BookmarkForm from 'modules/bookmarks/components/BookmarkForm';
import BookmarkList from 'modules/bookmarks/components/BookmarkList';
import BookmarkEditForm from 'modules/bookmarks/components/BookmarkEditForm';
import { fetchBookmarks, createBookmark } from 'modules/bookmarks/bookmarkActions';

class BookmarkListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {showCreateBookmarkForm: false};
    }

    componentDidMount() {
        this.props.fetchBookmarks(this.props.folderId);
    }

    handleSubmit = (values) => {
        const { createBookmark, folderId } = this.props;

        createBookmark(folderId, values);
    }

    toggleBookmarkForm() {
        const { showCreateBookmarkForm } = this.state;

        this.setState({showCreateBookmarkForm: !showCreateBookmarkForm});
    }

    renderBookmarkForm() {
        if(!this.state.showCreateBookmarkForm) {
            return null;
        }

        return (
            <div className="t-folder-detail__form">
                <BookmarkForm onSubmit={this.handleSubmit} />
            </div>
        );
    }

    render() {
        const { bookmarks } = this.props;

        return (
            <div className="t-folder-detail">
                <div className="t-folder-detail__action-bar">
                    <ActionBar title="My Folders">
                        <ul>
                            <li><img src="/svg/node-add.svg" onClick={this.toggleBookmarkForm.bind(this)} /></li>
                            <li><img src="/svg/lock-outline.svg" /></li>
                            <li><img src="/svg/delete.svg" /></li>
                        </ul>
                    </ActionBar>
                </div>
                <BookmarkEditForm onSubmit={this.handleSubmit} />
                {this.renderBookmarkForm()}
                <div className="t-folder-detail__main">
                    <BookmarkList bookmarks={bookmarks} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    folderId: ownProps.match.params.folderId,
    bookmarks: state.bookmarks
});

export default connect(
    mapStateToProps, {
        fetchBookmarks,
        createBookmark
    }
)(BookmarkListPage);
