import {
    combineReducers
} from 'redux';
import * as messageReducer from './messageReducer.js'

export default combineReducers(Object.assign(
    messageReducer
));