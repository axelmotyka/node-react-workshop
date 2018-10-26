import * as types from './types';
import AppApi from '../api/AppApi';

export function searchArticles(searchTerm) {
	console.log('**************** actions/searchArticles(' + searchTerm + ') ****************');
	return (dispatch, getState) => {
		return AppApi.searchArticles(searchTerm).then(response => {
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

export function getFavourites() {
	console.log('**************** actions/searchArticles() ****************');
	return (dispatch, getState) => {
		return AppApi.getFavourites().then(response => {
			dispatch(setFavourites(response));
		});
	};
}

export function setFavourites(favs) {
	return {
		type: types.GET_FAVOURITES,
		favs,
	};
}

export function insertFavourites(addToFavouriteArticle) {
	console.log('**************** actions/insertFavourites(' + addToFavouriteArticle + ') ****************');
	return (dispatch, getState) => {
		return AppApi.insertFavourites(addToFavouriteArticle).then(response => {
			dispatch(insertFavouritesResult(response));
		});
	};
}

export function insertFavouritesResult(result) {
	return {
		type: types.INSERT_FAVOURITES,
		result,
	};
}


