import React from 'react';
import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './store/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const mainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => mainApp);
