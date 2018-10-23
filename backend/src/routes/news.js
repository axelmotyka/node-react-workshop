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

	await Request(options)
		.then(response => {
			ctx.body = response;
		});
});

router.get(`${BASE_URL}favourite`, async ctx => {
	const exampleData = {};
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	return (ctx.body = exampleData);
});

module.exports = router;
