import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import initStore from 'utils/store';
import routes from '_app/routes';

import Layout from 'layout/Layout';

const history = createHistory();
const store = initStore(history);

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                {routes}
            </Layout>
        </Router>
    </Provider>
);

export default App;
