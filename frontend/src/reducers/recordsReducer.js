import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const records = createReducer({}, {
    [types.SET_RECORDS](state, action) {
        console.log("**************** reducers/" + action.type + " ****************");
        return new Date() + " : "  + action.records;
    },
});