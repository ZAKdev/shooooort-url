// For borwser compatibility
import 'babel-polyfill';

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import ReduxStore from './reduxStore';
import AppContainer from './AppContainer/';
import HomeContainer from './HomeContainer/';

// Stylus
import './index.styl';

const reduxStore = ReduxStore();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={hashHistory}>
      <Route component={AppContainer}>
        <Route path="/" component={HomeContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('mount-node'),
);

window.reduxStore = reduxStore;