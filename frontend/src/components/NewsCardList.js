import React, { Component } from 'react';
import NewsCard from '../components/NewsCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

class NewsCardList extends Component {
	render() {
		return (
			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center">
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</Grid>
		);
	}
}

NewsCardList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCardList);
