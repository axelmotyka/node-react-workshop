import * as types from './types';
import FavouritesApi from '../api/FavouritesApi';

export function getFavourites() {
	console.log('**************** actions/getFavourites() ****************');
	return (dispatch, getState) => {
		return FavouritesApi.getFavourites().then(response => {
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

export function insertFavourites(favourites) {
	console.log('**************** actions/insertRecord() ****************');
	return (dispatch, getState) => {
		return FavouritesApi.insertFavourites(favourites).then(response => {
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
