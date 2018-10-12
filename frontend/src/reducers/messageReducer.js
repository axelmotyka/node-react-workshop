import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const message = createReducer({}, {
    [types.SET_MESSAGE](state, action) {
        console.log("**************** reducers/" + action.type + " ****************");
        return new Date() + " : "  + action.message;
    },
});