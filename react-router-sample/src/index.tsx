import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
const { syncHistoryWithStore } = require('react-router-redux');

import App from './containers/App';
import configureStore from './store/configure-store';


const store: Redux.Store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const mainElement: HTMLElement = document.getElementById('main');

const Fuck = () => <div>fuck!</div>;
const Duck = () => <div>duck!</div>;


render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Fuck }/>
                <Route path="/fuck" component={ Fuck }/>
                <Route path="/duck" component={ Duck }/>
            </Route>
        </Router>
    </Provider>,
    mainElement
)
