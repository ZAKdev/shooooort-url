import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './../AppContainer/AppReducer';

export default () => createStore(combineReducers({
  AppReducer,
}), applyMiddleware(thunk));
