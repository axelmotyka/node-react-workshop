import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	textField: {
		marginLeft: 60,
		marginRight: theme.spacing.unit,
	},
});

class SearchBarComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: 'Axel',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	submitSearchTerm() {
		this.props.actions.searchArticles(this.state.searchTerm);
	}

	render() {
		console.log('Rendering SearchBarComp');
		const { classes } = this.props;
		return (
			<div>
				<Grid 
					item container direction="row"
					justify="center"
					alignItems="center">
					<TextField
						onKeyPress={(ev) => {
							console.log(`Pressed keyCode ${ev.key}`);
							if (ev.key === 'Enter') {
								this.submitSearchTerm();
								ev.preventDefault();
							}
						}}
						name="searchTerm"
						id="standard-search"
						label="Suchbegriff eingeben"
						type="search"
						className={classes.textField}
						margin="normal"
						value={this.state.searchTerm}
						onChange={this.handleChange}
					/>
					<Button
						variant="outlined"
						style={{ backgroundColor: '#E20074' }}
						onClick={() => this.submitSearchTerm()}>
						search
					</Button>
				</Grid>
			</div>
		);
	}
}

SearchBarComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(ActionCreators, dispatch),
	};
}

export default withStyles(styles)(
	connect(
		null,
		mapDispatchToProps
	)(SearchBarComponent)
);
