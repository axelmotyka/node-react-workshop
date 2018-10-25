const Router = require('koa-router');
const Request = require('request-promise');
const Sqlite3Dao = require('../db/Sqlite3Dao');
const NewsRepro = require('../db/newsRepro');

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
			article['md5Hash'] = crypto
				.createHash('md5')
				.update(string2Hash)
				.digest('base64');
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
	if (favourite.source.id === undefined) {
		ctx.status = 400;
		ctx.message = 'SourceID not set!';
		return;
	}
	if (favourite.source.name === undefined) {
		ctx.status = 400;
		ctx.message = 'SourceName not set!';
		return;
	}
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
	}
	if (favourite.md5Hash === undefined) {
		ctx.status = 400;
		ctx.message = 'md5Hash not set!';
		return;
	}

	const dao = new Sqlite3Dao();
	const newsRepro = new NewsRepro(dao);

	await dao
		.connect('example.sqlite3')
		.then(() => newsRepro.selectArtikelByMD5(favourite.md5Hash))
		.then(count => {
			if (count[0]['COUNT(*)'] > 0) {
				ctx.status = 409; // HHTP STATUS CODE conflict
				ctx.body = false;
				return;
			}
			return newsRepro
				.insertFavouriteArticle(favourite)
				.then(() => (ctx.body = true));
		});

	//
	//TODO GET select favourite to database
	//TODO delete favourite to database
	//TODO set a useable response message
});

module.exports = router;
