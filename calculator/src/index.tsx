import * as React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './app/App';
import reducer from './app/reducer';
import configureStore from './app/configureStore';
import DevTools from './app/DevTools';


const store: Redux.Store = configureStore();
const mainElement: HTMLElement = document.getElementById('main');


render(
    <Provider store={store}>
    	<div>
			<App />
			<DevTools />
		</div>
    </Provider>,
    mainElement
)
