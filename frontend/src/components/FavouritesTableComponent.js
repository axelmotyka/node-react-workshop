import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
			<Paper className={classes.root}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => this.updateSearch()}>
					Update
				</Button>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell numeric>ID</TableCell>
							<TableCell>Author</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.news.map(article => {
							return (
								<TableRow key={article.id}>
									<TableCell numeric>{article.id}</TableCell>
									<TableCell numeric>
										{article.author}
									</TableCell>
									<TableCell numeric>
										{article.title}
									</TableCell>
									<TableCell numeric>
										{article.description}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
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
