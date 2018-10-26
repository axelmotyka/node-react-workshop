import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCardList from '../components/NewsCardList';
import FavouritesCardList from '../components/FavouritesCardList';
import SearchBarComponent from '../components/SearchBarComponent';

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
				<SearchBarComponent />
				<NewsCardList />
				<FavouritesCardList />
			</Grid>
		);
	}
}

export default NewsContainer;
