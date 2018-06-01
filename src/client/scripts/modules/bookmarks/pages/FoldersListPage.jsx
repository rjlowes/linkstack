import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionBar from 'modules/bookmarks/components/ActionBar';
import FolderList from 'modules/bookmarks/components/FolderList';
import FolderForm from 'modules/bookmarks/components/FolderForm';

import { fetchFolders } from 'modules/bookmarks/actions/fetchFolderActions';
import { createFolder } from 'modules/bookmarks/actions/createFolderActions';

class FoldersPage extends Component {

    componentDidMount() {
        this.props.fetchFolders();
    }

    handleSubmit = (values) => {
        this.props.createFolder(values);
    }

    render() {
        const { folders } = this.props;

        return (
            <div className="t-folders">
                <div className="t-folders__action-bar">
                    <ActionBar title="My Folders">
                        <ul>
                            <li><img src="/svg/folder-new.svg" /></li>
                        </ul>
                    </ActionBar>
                </div>
                <div className="t-folders__form">
                    <FolderForm onSubmit={this.handleSubmit} />
                </div>
                <div className="t-folders__main">
                    <FolderList folders={folders} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    folders: state.folders
});

export default connect(mapStateToProps, { fetchFolders, createFolder })(FoldersPage);
