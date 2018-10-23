import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import RecordsTableComponent from '../components/RecordsTableComponent';

class RecordsContainer extends Component {
	render() {
		console.log('Rendering RecordsContainer');

		return (
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="flex-start"
				spacing={16}>
				<RecordsTableComponent />
			</Grid>
		);
	}
}

export default RecordsContainer;
