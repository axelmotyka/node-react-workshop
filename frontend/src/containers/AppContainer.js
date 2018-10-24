import React, { Component } from 'react';
import './AppContainer.css';
import NewsContainer from './NewsContainer';

class AppContainer extends Component {
	render() {
		console.log('Rendering AppContainer');
		return (
			<div>
				<NewsContainer />
			</div>
		);
	}
}

export default AppContainer;
