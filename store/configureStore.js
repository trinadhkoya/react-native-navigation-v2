/* eslint-disable global-require */
/* eslint-disable no-undef */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

let middleware = [thunk];

if (__DEV__) {
    const reduxImmutableStateInvariant = reduxImmutableStateInvariant();
    middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
