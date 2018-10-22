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
		this.props.actions.getRecords();
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
							<TableCell numeric>ID</TableCell>
							<TableCell>Forename</TableCell>
							<TableCell>Surename</TableCell>
							<TableCell>EMail</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.records.map(record => {
							return (
								<TableRow key={record.id}>
									<TableCell numeric>{record.id}</TableCell>
									<TableCell numeric>
										{record.forename}
									</TableCell>
									<TableCell numeric>
										{record.surename}
									</TableCell>
									<TableCell numeric>
										{record.email}
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
	actions: PropTypes.func.isRequired,
	records: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
	return {
		records: state.records,
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
