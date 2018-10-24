import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewsCardList from './NewsCardList';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

class NewsTableComponent extends Component {

	updatePressed() {
		console.log('updatePressed() => ');
		this.props.actions.getFavourites();
	}
	updateSearch() {
		console.log('updateSearch() => ');
		this.props.actions.searchArticles();
	}

	render() {
		const { classes } = this.props;

		return (
			<NewsCardList></NewsCardList>
		);
	}
}

NewsTableComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	favourites: PropTypes.array.isRequired,
	// actions: PropTypes.func.isRequired,
	news: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		// records: state.records,
		favourites: state.favourites,
		news: state.news,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(ActionCreators, dispatch),
	};
}

export default withStyles(styles)(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewsTableComponent)
);
