// For borwser compatibility
import 'babel-polyfill';

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import ReduxStore from './reduxStore';
import AppContainer from './AppContainer/';

// Stylus
import './index.styl';

const reduxStore = ReduxStore();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>
  , document.getElementById('mount-node'),
);

window.reduxStore = reduxStore;