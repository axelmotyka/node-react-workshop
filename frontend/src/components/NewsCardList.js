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
	newsCard: {
		marginBottom: '2vh',
		border: '1px solid',
		padding: '10px',
		boxShadow: '8px 10px rgba(136,136,136,0.2)',
	},
});

class NewsCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addToFavouriteArticle: '',
			removeFromFavouriteArticle: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	updateFavourites(article) {
		console.log('addToFavouritePressed() => ');
		console.log(article);

		this.props.actions.insertFavourites(article);
	}

	removeFavourite(article) {
		console.log('removeFromFavouritesPressed() => ');

		this.props.actions.removeFavourite(article);
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
						<Card className={classes.newsCard} key={article.title}>
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
										{article.description}
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
								<Button
									size="small"
									color="secondary"
									onClick={() =>
										this.removeFavourite(article)
									}>
									Remove From Favourites
								</Button>
							</CardActions>
						</Card>
					);
				})}
			</Grid>
		);
	}
}

NewsCardList.propTypes = {
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
	)(NewsCardList)
);
