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

	static searchArticles() {
		return new Promise((resolve, reject) => {
			Request(
				this.get('http://localhost:3000/api/v1/news/search')
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
