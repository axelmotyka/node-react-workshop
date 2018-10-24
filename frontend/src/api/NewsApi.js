const Promise = require('bluebird');
const Request = require('request-promise');

class NewsApi {
	static get(url) {
		return {
			method: 'GET',
			uri: url,
			headers: {
				'Content-Type': 'application/json',
			},
			json: true, // Automatically parses the JSON string in the response
		};
	}

	static searchArticles(searchTerm) {
		return new Promise((resolve, reject) => {
			Request(
				this.get('http://localhost:3000/api/v1/news/search?q='+ searchTerm)
			)
				.then(function(response) {
					console.log(response);
					resolve(response);
				})
				.catch(function(err) {
					console.error(err);
					reject(err);
				});
		});
	}

	// not used yet - maybe for future use?
	static getFavourites() {
		return new Promise((resolve, reject) => {
			Request(
				this.get('http://localhost:3000/api/v1/news/favourite')
			)
				.then(function(response) {
					console.log(response);
					resolve(response);
				})
				.catch(function(err) {
					console.error(err);
					reject(err);
				});
		});
	}
}

export default NewsApi;
