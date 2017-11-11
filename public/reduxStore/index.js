import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './../AppContainer/AppReducer';
import HomeReducer from './../HomeContainer/HomeReducer';

export default () => createStore(combineReducers({
  AppReducer,
  HomeReducer,
}), applyMiddleware(thunk));
