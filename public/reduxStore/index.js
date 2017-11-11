import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import CommonReducer from './CommonReducer';

export default () => createStore(combineReducers({
  CommonReducer,
}), applyMiddleware(thunk));
