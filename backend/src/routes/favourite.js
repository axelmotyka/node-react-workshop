const Router = require('koa-router');
const Dao = require('../db/SimpleDao');

const LOG_TAG = 'NewsRouter';
const BASE_URL = '/api/v1/news/';

const router = new Router();

const exampleData = {
	
		"status": "ok",
		"totalResults": 6,
		"articles": [
			{
				"source": {
					"id": "techcrunch",
					"name": "TechCrunch"
				},
				"author": "Steven Aquino",
				"title": "Apple Watch Series 4 is the most accessible watch yet",
				"description": "I can confidently say I could live without my Apple Watch. But I also can confidently say I wouldn’t want to. The fourth-generation Apple Watch is the best, most accessible Apple Watch to date.",
				"url": "https://techcrunch.com/2018/10/21/apple-watch-series-4-is-the-most-accessible-watch-yet/",
				"urlToImage": "https://techcrunch.com/wp-content/uploads/2018/09/IMG_3293.jpg?w=600",
				"publishedAt": "2018-10-21T15:15:58Z",
				"content": "More posts by this contributor Every time I ponder the impact Apple Watch has had on my life, my mind always goes to Matthew Panzarinos piece published prior to the devices launch in 2015. In it, Panzarino writes about how using Apple Watch saves time; as a s… [+15270 chars]",
				"favourite": null,
				"like":null
			},
			{
				"source": {
					"id": "business-insider-uk",
					"name": "Business Insider (UK)"
				},
				"author": "Kif Leswing",
				"title": "This chart reveals a growing problem for Apple — that 'customers are getting less excited for each new generation of iPhone'",
				"description": "New iPhone models haven't sold out as quickly...",
				"url": "http://uk.businessinsider.com/customers-are-getting-less-excited-for-each-new-generation-of-iphone-citi-2018-10",
				"urlToImage": "http://static5.uk.businessinsider.com/image/58827859dd0895e81d8b4669-1190-625/this-chart-reveals-a-growing-problem-for-apple--that-customers-are-getting-less-excited-for-each-new-generation-of-iphone.jpg",
				"publishedAt": "2018-10-21T13:00:00Z",
				"content": "Apple CEO Tim Cook Getty/Justin Sullivan Apple launched the iPhone XR at 3 A.M. in the morning on Friday, and when morning came, nearly all of the models were still in stock, according to Macworld. It's a change for Apple, which usually requires customers to … [+2056 chars]",
				"favourite": null,
				"like":null
			},
			{
				"source": {
					"id": "the-verge",
					"name": "The Verge"
				},
				"author": "Vlad Savov",
				"title": "Android’s new multitasking is terrible and should be changed back",
				"description": "The new Android Pie multitasking on the Pixel 3 is based on gestures like those in Apple’s iOS on the iPhone X and iPhone XS. The only difference? Apple’s is good and Google’s is bad.",
				"url": "https://www.theverge.com/circuitbreaker/2018/10/20/18002976/android-pie-multitasking-gestures-google-pixel",
				"urlToImage": "https://cdn.vox-cdn.com/thumbor/wgQMVr3ZYVbqx1tPcz1RmDT10fI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13303245/vsavov_pixel3_multitasking8.jpg",
				"publishedAt": "2018-10-20T14:09:34Z",
				"content": "Ive been using the Google Pixel 3 XL since its launch two weeks ago, and I wholeheartedly agree with our review s conclusion that the Pixel 3 offers the best Android experience right now. But theres one aspect of that Android experience that I cant abide, and… [+5434 chars]",
				"favourite": null,
				"like": null
			},
			{
				"source": {
					"id": "ars-technica",
					"name": "Ars Technica"
				},
				"author": "Dan Goodin",
				"title": "Apple CEO Tim Cook calls on Bloomberg to retract its Chinese spy story",
				"description": "\"We were very clear with them that this did not happen,\" Cook tells BuzzFeed.",
				"url": "https://arstechnica.com/information-technology/2018/10/apple-ceo-tim-cook-calls-on-bloomberg-to-retract-its-chinese-spy-story/",
				"urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2015/05/web-servers-640x215.jpg",
				"publishedAt": "2018-10-19T19:55:24+00:00",
				"content": "271 Apple CEO Tim Cook is calling on Bloomberg Business to retract a story that said his company was the victim of a hardware-based attack carried out by the Chinese government. It's the first time Apple has ever publicly demanded a retraction, according to B… [+3475 chars]",
				"favourite": null,
				"like": null
			},
			{
				"source": {
					"id": "recode",
					"name": "Recode"
				},
				"author": "Recode Staff",
				"title": "Recode Daily: Uber is building tools to Uber-ize all kinds of work",
				"description": "Plus, how SoftBank is handling the global fallout of the Khashoggi crisis; Apple sets the date for another new hardware event; the awkward etiquette of iPad tipping.",
				"url": "https://www.recode.net/2018/10/19/17996882/uber-works-saudi-arabia-khashoggi-softbank-mnuchin-apple-palantir-fortune-benioff-brandless-tipping",
				"urlToImage": "https://cdn.vox-cdn.com/thumbor/QXiyDpTs2bcHBM5DlE-VlYcLrZs=/0x288:5164x2992/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13295429/Uber_driver.jpg",
				"publishedAt": "2018-10-19T14:22:02Z",
				"content": "Uber has transformed the global taxi industry now its aiming at Uber-izing side hustles. The ride-hail company has quietly been developing a new short-term staffing business, called Uber Works, to expand its on-demand model into additional types of temporary … [+4764 chars]",
				"favourite": null,
				"like": null
			},
			{
				"source": {
					"id": "techradar",
					"name": "TechRadar"
				},
				"author": "Matt Swider",
				"title": "Apple's iPad Pro and Mac launch event is happening in New York on October 30",
				"description": "Apple is coming to 'The Big Apple'",
				"url": "https://www.techradar.com/news/apples-ipad-pro-and-mac-launch-event-is-happening-in-new-york-on-october-30",
				"urlToImage": "https://cdn.mos.cms.futurecdn.net/gHZcnxNGM8jeAuYhpSu7UU-1200-80.jpg",
				"publishedAt": "2018-10-18T16:26:54Z",
				"content": "Apple is officially holding its next launch event in New York City on October 30, and we fully expect the iPad Pro 2018 and new MacBooks to launch then. Specifically, the launch event will be at the Brooklyn Academy of Music's Howard Gilman Opera House, accor… [+2935 chars]",
				"favourite": null,
				"like": null
			}
		]
	}


router.get(`${BASE_URL}favourite`, async ctx => {
	console.log(`${LOG_TAG} - Handling ${ctx._matchedRoute}`);
	return ctx.body =
		exampleData;
});

module.exports = router;
