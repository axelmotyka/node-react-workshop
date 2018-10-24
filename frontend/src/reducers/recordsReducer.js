import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const news = createReducer(
	{},
	{
		[types.SEARCH_ARTICLES](state, action) {
			console.log(
				'**************** reducers/' + action.type + ' ****************'
			);
			return action.news.articles;
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

export const favourites = createReducer(
	{},
	{
		[types.SET_FAVOURITES](state, action) {
			console.log(
				'**************** reducers/' + action.type + ' ****************'
			);
			return action.favourites.articles;
		},
	}
);
