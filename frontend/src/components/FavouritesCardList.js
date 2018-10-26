import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	media: {
		height: '500px',
		maxHeight: '23vh',
	},
	content: {
		maxWidth: '70vw',
	},
	author: {
		textAlign: 'right',
		fontWeight: 'bold',
	},
});

class FavouritesCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addToFavouriteArticle: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event.target.name);
		console.log(event.target.value);
		this.setState({ [event.target.name]: event.target.value });
	}

	updateFavourites(article) {
		console.log('addToFavouritePressed() => ');
		console.log(article);

		this.props.actions.insertFavourites(article);
	}

	render() {
		const { classes } = this.props;
		console.log('******* NEWSCARDLIST.RENDER()');
		console.log(this.props.news);
		return (
			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center">
				{this.props.news.map(article => {
					return (
						<Card className={classes.card} key={article.title}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={article.urlToImage}
								/>
								<CardContent className={classes.content}>
									<Typography
										gutterBottom
										variant="h5"
										component="h2">
										{article.title}
									</Typography>
									<Typography component="p">
										{article.content}
									</Typography>
									<Typography
										component="p"
										className={classes.author}>
										{article.author}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="small"
									color="primary"
									onClick={() =>
										this.updateFavourites(article)
									}>
									Add To Favourites
								</Button>
							</CardActions>
						</Card>
					);
				})}
			</Grid>
		);
	}
}

FavouritesCardList.propTypes = {
	classes: PropTypes.object.isRequired,
	news: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
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
	)(FavouritesCardList)
);
