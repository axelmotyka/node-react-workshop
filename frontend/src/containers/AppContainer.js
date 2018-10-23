import React, { Component } from 'react';
import './AppContainer.css';
// import RecordsContainer from './RecordsContainer';
import NewsContainer from './NewsContainer';

class AppContainer extends Component {
	render() {
		console.log('Rendering AppContainer');
		return (
			<div className="App">
				<NewsContainer />
			</div>
		);
	}
}

export default AppContainer;
