import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	media: {
		height: '500px',
		maxHeight: '20vh',
	},
	content: {
		maxWidth: '70vw',
	},
};

class NewsCard extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="https://heise.cloudimg.io/bound/1920x1920/q90.png-lossy-90.webp-lossy-90.foil1/_www-heise-de_/imgs/18/2/5/2/4/3/3/5/imessage-78da309544e19084.jpeg"
						title="Contemplative Reptile"
					/>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5" component="h2">
							Apple: Beautygate war ein Bug
						</Typography>
						<Typography component="p">
							Zu künstlich wirkende Porträtaufnahmen sollen mit
							iOS 12.1 der Vergangenheit angehören, so der
							iPhone-Produzent.
						</Typography>
						<Typography component="p">
							Porträts mit dem iPhone XS. (Bild: Apple) Zu
							künstlich wirkende Porträtaufnahmen sollen mit iOS
							12.1 der Vergangenheit angehören, so der
							iPhone-Produzent. Ein von Nutzern bemerktes Problem
							bei Selfie-Aufnahmen mit iPhone XS und XS Max hat
							Software-Ursachen. Porträts mit dem iPhone XS. (
							Bild: Apple) Zu künstlich wirkende Porträtaufnahmen
							sollen mit iOS 12.1 der Vergangenheit angehören, so
							der iPhone-Produzent. Ein von Nutzern bemerktes
							Problem bei Selfie-Aufnahmen mit iPhone XS und XS
							Max hat Software-Ursachen. D…
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		);
	}
}

NewsCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
