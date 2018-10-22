import { combineReducers } from 'redux';
import * as recordsReducer from './recordsReducer.js';

export default combineReducers(Object.assign(recordsReducer));
