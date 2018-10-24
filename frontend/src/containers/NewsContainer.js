import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsTableComponent from '../components/NewsTableComponent';
import FavouritesTableComponent from '../components/FavouritesTableComponent';
import SearchBarComponent from '../components/SearchBarComponent';

class NewsContainer extends Component {
	render() {
		console.log('Rendering NewsContainer');

		return (
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="flex-start">
				<SearchBarComponent />
				<NewsTableComponent />
				<FavouritesTableComponent />
			</Grid>
		);
	}
}

export default NewsContainer;
