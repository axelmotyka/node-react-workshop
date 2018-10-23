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

class RecordsTableComponent extends Component {
	createData(forename, surename, email) {
		let id = 0;
		id += 1;
		return { id, forename, surename, email };
	}

	updatePressed() {
		console.log('updatePressed() => ');
		this.props.actions.getFavourites();
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => this.updatePressed()}>
					Update
				</Button>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>Content</TableCell>
							<TableCell>Author</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.favourites.map(article => {
							return (
								<TableRow key={article.title}>
									<TableCell numeric>
										{article.title}
									</TableCell>
									<TableCell numeric>
										{article.description}
									</TableCell>
									<TableCell numeric>
										{article.content}
									</TableCell>
									<TableCell numeric>
										{article.author}
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

RecordsTableComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	records: PropTypes.array.isRequired,
	favourites: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
	return {
		records: state.records,
		favourites: state.favourites,
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
	)(RecordsTableComponent)
);
