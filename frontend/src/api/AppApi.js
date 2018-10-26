const Promise = require('bluebird');
const Request = require('request-promise');

class AppApi {
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

	static post(url, body) {
		return {
			method: 'Post',
			uri: url,
			body: body,
			headers: {
				'Content-Type': 'application/json',
			},
			json: true, // Automatically parses the JSON string in the response
		};
	}

	static searchArticles(searchTerm) {
		return new Promise((resolve, reject) => {
			Request(
				this.get(
					'http://localhost:3000/api/v1/news/search?q=' + searchTerm
				)
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

	static getFavourites() {
		return new Promise((resolve, reject) => {
			Request(this.get('http://localhost:3000/api/v1/news/favourite'))
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

	static insertFavourites(favouriteArticle) {
		return new Promise((resolve, reject) => {
			Request(
				this.post(
					'http://localhost:3000/api/v1/news/favourite?userID=123',
					favouriteArticle
				)
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

export default AppApi;
