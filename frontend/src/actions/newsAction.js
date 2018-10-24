import * as types from './types';
import NewsApi from '../api/NewsApi';

export function searchArticles() {
	console.log('**************** actions/searchArticles() ****************');
	return (dispatch, getState) => {
		return NewsApi.searchArticles().then(response => {
			dispatch(setArticles(response));
		});
	};
}

export function setArticles(news) {
	return {
		type: types.SEARCH_ARTICLES,
		news,
	};
}


