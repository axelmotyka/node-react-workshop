import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsTableComponent from '../components/NewsTableComponent';
import FavouritesTableComponent from '../components/FavouritesTableComponent';
import NewsCardList from '../components/NewsCardList';

class NewsContainer extends Component {
	render() {
		console.log('Rendering NewsContainer');

		return (
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="flex-start"
				spacing={16}>
				<FavouritesTableComponent />
			</Grid>
		);
	}
}

export default NewsContainer;
