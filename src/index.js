import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss';
import './assets/demo/demo.css';
import './assets/demo/nucleo-icons-page-styles.css';
import 'tachyons';
import 'aos';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { changeRoute, changeScrollId, changeMakeCall, makeContactForm } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({changeRoute, changeScrollId, changeMakeCall, makeContactForm});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
