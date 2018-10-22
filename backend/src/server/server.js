const Koa = require('koa');
const app = new Koa();
const BodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 8080;

const indexRoutes = require('../routes/index');
const databaseRoutes = require('../routes/database');

console.log(
	'Server listening on routes: ' +
		indexRoutes.stack.map(i => i.path) +
		',' +
		databaseRoutes.stack.map(i => i.path)
);

const server = app
	.use(async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			ctx.status = err.status || 500;
			ctx.body = err.message;
			ctx.app.emit('error', err, ctx);
		}
	})
	.on('error', (err, ctx) => {
		console.log(err);
		ctx.status = err.status || 500;
		ctx.body = err.message;
	})
	.use(BodyParser())
	.use(indexRoutes.routes())
	.use(indexRoutes.allowedMethods())
	.use(databaseRoutes.routes())
	.use(databaseRoutes.allowedMethods())
	.listen(PORT, () => {
		console.log(`Server listening on port: ${PORT}`);
	});

module.exports = server;
