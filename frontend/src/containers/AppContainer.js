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
				<NewsContainer />
			</div>
		);
	}
}

export default AppContainer;
