import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';

import FoldersListPage from 'modules/bookmarks/pages/FoldersListPage';
import BookmarkListPage from 'modules/bookmarks/pages/BookmarkListPage';

export default (
    <Switch>
        <Route path="/folders/:folderId" component={ BookmarkListPage } />
        <Route path="/" component={ FoldersListPage } />

    </Switch>
);
