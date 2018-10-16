const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'Hello DevAcadmey!'
  };
});
router.get('/error', async (ctx) => {
  ctx.throw(
    400,
    'Ooopps!')
});

module.exports = router;