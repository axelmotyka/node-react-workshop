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

	static getFavourites() {
		return new Promise((resolve, reject) => {
			Request(
				this.get('http://localhost:3000/api/v1/news/search?q=apple')
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

	static addToFavourites() {
		return new Promise((resolve, reject) => {
			Request(
				this.get('http://localhost:3000/api/v1/news/search?q=apple')
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

	static insertRecord(record) {
		return new Promise((resolve, reject) => {
			Request(
				this.post(
					'http://localhost:3000/api/v1/database/insert/',
					record
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
	static insertFavourites(record) {
		return new Promise((resolve, reject) => {
			Request(
				this.post(
					'http://localhost:3000/api/v1/database/insert/',
					record
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
