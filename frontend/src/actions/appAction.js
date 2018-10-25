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

export function insertFavourites(addToFavouriteArticle) {
	console.log('**************** actions/insertFavourites(' + addToFavouriteArticle + ') ****************');
	return (dispatch, getState) => {
		return AppApi.insertFavourites(addToFavouriteArticle).then(response => {
			dispatch(insertFavouritesResult(response));
		});
	};
}

export function getFavourites() {
	console.log('**************** actions/getFavourites() ****************');
	return (dispatch, getState) => {
		return AppApi.getFavourites().then(response => {
			dispatch(setFavourites(response));
		});
	};
}

export function addToFavourites() {
	console.log('**************** actions/getFavourites() ****************');
	return (dispatch, getState) => {
		return AppApi.addToFavourites().then(response => {
			dispatch(setFavourites(response));
		});
	};
}

export function setFavourites(favourites) {
	return {
		type: types.SET_FAVOURITES,
		favourites,
	};
}



export function insertFavouritesResult(result) {
	return {
		type: types.INSERT_FAVOURITES,
		result,
	};
}


