import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducers from '_app/reducerIndex';

// const dummyReducer = () => {
//     return {}
// };

export default (history, initialState = {}) => {
    const routerMW = routerMiddleware(history);

    // TODO create indexReducer.js
    return createStore(
        combineReducers(reducers),
        initialState,
        applyMiddleware(thunk, routerMW, logger)
    );
};
