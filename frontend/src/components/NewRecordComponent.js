import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class NewRecordComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			forename: 'aaa',
			surename: 'bbb',
			email: 'ccc',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	insertPressed() {
		console.log('insertPressed() => ');
		this.props.actions.insertRecord(this.state);
	}

	render() {
		return (
			<Grid item container direction="row">
				<TextField
					name="forename"
					className={'margin: theme.spacing.unit,'}
					inputProps={{ 'aria-label': 'Description' }}
					label="forename"
					value={this.state.forename}
					onChange={this.handleChange}
				/>
				<TextField
					name="surename"
					className={'margin: theme.spacing.unit,'}
					inputProps={{ 'aria-label': 'Description' }}
					label="surename"
					value={this.state.surename}
					onChange={this.handleChange}
				/>
				<TextField
					name="email"
					className={'margin: theme.spacing.unit,'}
					inputProps={{ 'aria-label': 'Description' }}
					label="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => this.insertPressed()}>
					Insert
				</Button>
			</Grid>
		);
	}
}

NewRecordComponent.propTypes = {
	actions: PropTypes.object.isRequired,
	records: PropTypes.array.isRequired,
	news: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(ActionCreators, dispatch),
	};
}

export default connect(
	null,
	mapDispatchToProps
)(NewRecordComponent);
