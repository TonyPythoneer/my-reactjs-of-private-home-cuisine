import * as React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import DevTools from "./DevTools";
import reducer from './reducer';


// enhancer
const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk),
    // Redux tool
    DevTools.instrument()
);


// configureStore
export default function configureStore(initialState = undefined) {
    const store: Redux.Store = createStore(reducer, initialState, enhancer);
    return store;
}
