import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const records = createReducer(
	{},
	{
		[types.SET_RECORDS](state, action) {
			console.log(
				'**************** reducers/' + action.type + ' ****************'
			);
			return action.records.rows;
		},
	}
);

export const lastInsertResult = createReducer(
	{},
	{
		[types.INSERT_RECORD](state, action) {
			console.log(
				'**************** reducers/' + action.type + ' ****************'
			);
			return action.result;
		},
	}
);
