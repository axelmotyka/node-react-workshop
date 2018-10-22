const Router = require('koa-router');
const Dao = require('../db/SimpleDao');

const LOG_TAG = 'NewsRouter';
const BASE_URL = '/api/v1/news';

const router = new Router();

const exampleData = {
	source: {
		"id": "crypto-coins-news",
		"name": "Crypto Coins News"
		},
		"author": "Yashu Gola",
		"title": "NEM (XEM) Surges 10% as Foundation Signs MoU with UAE Ministry",
		"description": "The New Economy Movement (NEM)’s platform token XEM surged 10 percent against the dollar on Monday, rising from 0.0974-fiat to 0.1046-fiat. The XEM/USD formed a straightforward uptrend while attempting to retest the high from Sep 6 correction action. The pric…",
		"url": "https://www.ccn.com/nem-xem-surges-10-as-foundation-signs-mou-with-uae-ministry/",
		"urlToImage": "https://www.ccn.com/wp-content/uploads/2018/03/NEM-keyboard.jpg",
		"publishedAt": "2018-10-22T11:02:14Z",
		"content": "The New Economy Movement (NEM)’s platform t‚urged 10 percent against the dollar on Monday, rising from 0.0974-fiat to 0.1046-fiat. The XEM/USD formed a straightforward uptrend while attempting to retest the high from Sep 6 correction action. The pric… [+2706 chars]"
}


router.get(`${BASE_URL}/search`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	return ctx.body =
		exampleData;
});

module.exports = router;
