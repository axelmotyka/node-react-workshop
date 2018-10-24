import * as types from './types';
import NewsApi from '../api/NewsApi';

export function searchArticles(searchTerm) {
	console.log('**************** actions/searchArticles(' + searchTerm + ') ****************');
	return (dispatch, getState) => {
		return NewsApi.searchArticles(searchTerm).then(response => {
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


