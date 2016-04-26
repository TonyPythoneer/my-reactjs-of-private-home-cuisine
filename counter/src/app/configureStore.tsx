import * as React from 'react';
import { createStore, compose } from 'redux';

import reducer from './reducer';


const enhancer = compose(
    // Middleware you want to use in development:
    //applyMiddleware(d1, d2, d3),
);


export default function configureStore(initialState = undefined) {
    const store = createStore(reducer, initialState, enhancer);
    return store;
}
