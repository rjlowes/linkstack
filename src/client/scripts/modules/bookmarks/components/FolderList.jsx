import React from 'react';
import { Link } from 'react-router-dom';
import Folder from 'modules/bookmarks/components/Folder';

const FolderList = ({ folders }) => {
    if(!folders) {
        return null;// TODO add no folders message
    }

    return (
        <ul className="folder-list">
            {folders.map((folder, i) => {
                return (
                    <li key={i}>
                        <Link to={`/folders/${folder._id}`}>
                            <Folder folder={folder} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default FolderList;
