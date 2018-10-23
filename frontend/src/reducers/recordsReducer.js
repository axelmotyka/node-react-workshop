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

