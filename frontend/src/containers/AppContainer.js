import React, { Component } from 'react';
import './AppContainer.css';
import FavouritesContainer from './FavouritesContainer';
import NewsContainer from './NewsContainer';
import Grid from '@material-ui/core/Grid';

class AppContainer extends Component {
	render() {
		console.log('Rendering AppContainer');
		return (
			<div>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="flex-start"
					spacing={16}>
					<NewsContainer />
					<FavouritesContainer />
				</Grid>
			</div>
		);
	}
}

export default AppContainer;
