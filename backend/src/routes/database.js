const Router = require('koa-router');
const Sqlite3Dao = require('../db/Sqlite3Dao');
const NewsRepro = require('../db/newsRepro');

const LOG_TAG = 'DaoRouter';
const BASE_URL = '/api/dev/v1/database';

const router = new Router();

router.get(`${BASE_URL}/create`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	const dao = new Sqlite3Dao();
	const newsRepro = new NewsRepro(dao);
	await dao
		.connect('example.sqlite3')
		.then(() => newsRepro.dropTableUser())
		.then(() => newsRepro.dropTableArtikel())
		.then(() => newsRepro.dropTableFavourites())
		.then(() => newsRepro.createTableUser())
		.then(() => newsRepro.createTableArtikel())
		.then(() => newsRepro.createTableFavourites())
		.then(() => {
			ctx.body = {
				message: 'geht'
			};
		})
		.catch(err => {
			ctx.status = 500;
			ctx.body = err.toString();
		});
});

router.get(`${BASE_URL}/select`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	const dao = new Dao();
	await dao.connect('example.sqlite3');
	await dao
		.select()
		.then(rows => {
			ctx.body = {
				status: 'success',
				rows: rows,
			};
		})
		.catch(err => {
			ctx.status = 500;
			ctx.body = err.toString();
		});
});

router.post(`${BASE_URL}/insert`, async (ctx, next) => {
	await next();
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	console.log(ctx.request.body);

	const dao = new Dao();
	await dao.connect('example.sqlite3');
	await dao
		.insert(
			ctx.request.body['forename'],
			ctx.request.body['surename'],
			ctx.request.body['email']
		)
		.then(
			result =>
				(ctx.body = {
					status: 'success',
					id: result.id,
				})
		)
		.catch(err => {
			ctx.status = 500;
			ctx.body = err.toString();
		});
});

module.exports = router;
