const Router = require('koa-router');
const Promise = require('bluebird');
const Request = require('request-promise');
const Dao = require('../db/SimpleDao');

const LOG_TAG = 'NewsRouter';
const BASE_URL = '/api/v1/news';

const router = new Router();

router.get(`${BASE_URL}/search`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);

	const options = {
		method: 'GET',
		uri: 'https://newsapi.org/v2/everything',
		qs: {
			apiKey: '3746877ab56246018681edb83832e405',
			q: ctx.query.q,
			pageSize: '10',
			language: 'de',
		},
		json: true, // Automatically parses the JSON string in the response
	};

	await Request(options).then(response => {
		const crypto = require('crypto');
		response.articles.forEach(function(article) {
			const string2Hash = article['publishedAt'] + article['url'];
			article['md5Hash'] = crypto.createHash('md5').update(string2Hash).digest('base64');
		});
		ctx.body = response;
	});
});

router.get(`${BASE_URL}/favourite`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);

	//TODO get favourite from database
	const favourite = {
		message: 'Hier würden ihre Favoriten stehen!',
	};
	return (ctx.body = favourite);
});

router.post(`${BASE_URL}/favourite`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);

	const favourite = ctx.request.body;
	const author = favourite.author;
	//TODO check incoming favourite:
	// * all fields are available
	// * all fields are correctly set

	if (favourite.author === undefined) {
		ctx.status = 400;
		ctx.message = 'Author not set!';
		return;
	}
	if (favourite.title === undefined) {
		ctx.status = 400;
		ctx.message = 'Title not set!';
		return;
	}
	/*if (favourite.artikelID === undefined) {
		ctx.status = 400;
		ctx.message = 'ArtikelID not set!';
		return;
	}
	if (favourite.sourceID === undefined) {
		ctx.status = 400;
		ctx.message = 'SourceID not set!';
		return;
	}
	if (favourite.sourceName === undefined) {
		ctx.status = 400;
		ctx.message = 'SourceName not set!';
		return;
	}*/
	if (favourite.description === undefined) {
		ctx.status = 400;
		ctx.message = 'Description not set!';
		return;
	}
	if (favourite.url === undefined) {
		ctx.status = 400;
		ctx.message = 'URL not set!';
		return;
	}
	if (favourite.urlToImage === undefined) {
		ctx.status = 400;
		ctx.message = 'URLtoImage not set!';
		return;
	}
	if (favourite.publishedAt === undefined) {
		ctx.status = 400;
		ctx.message = 'PublishedAt not set!';
		return;
	}
	if (favourite.content === undefined) {
		ctx.status = 400;
		ctx.message = 'Content not set!';
		return;
	} /*
	if (favourite.md5Hash === undefined) {
		ctx.status = 400;
		ctx.message = 'md5Hash not set!';
		return;
	}
	
		let keyArray=["id","name","author","title","description","url","urlToImage","publishedAt","content"];
	for (var property in favourite) {
		if (Object.hasOwnProperty(property)!==keyArray[i]) {
				ctx.status = 400;
				ctx.message = 'Sorry but ' + keyArray[i] + 'is not set!';
				i = i+1;
				return;
			}
		}
		
	*/

	//TODO write favourite to database

	var resultAsIdFromDatabase = 2;

	//TODO set a useable response message
	/*const response = {
		message: resultAsIdFromDatabase + ' wurde angelegt und in Datenbank geschrieben!',
		favourite: ctx.request.body,
	};*/
	const response = {
		articleID: resultAsIdFromDatabase,
	};
	return (ctx.body = response);
});

module.exports = router;
