import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import RecordsTableComponent from '../components/RecordsTableComponent';
import NewRecordComponent from '../components/NewRecordComponent';
import NewsTableComponent from '../components/NewsTableComponent';
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
				<RecordsTableComponent />
				<NewRecordComponent />
				<NewsTableComponent />
				<NewsCardList />
			</Grid>
		);
	}
}

export default NewsContainer;
