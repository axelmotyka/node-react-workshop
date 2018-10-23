import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../components/NewsCard';

class NewsCardList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let articles = [{ title: 'Eins' }, { title: 'Zwei' }];
		return (
			<Grid>
				{articles.map(article => {
					return (
						<NewsCard key={article.title} title={article.title} />
					);
				})}
			</Grid>
		);
	}
}

export default NewsCardList;
