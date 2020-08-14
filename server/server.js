/* eslint-disable no-console */
import Koa from 'koa';
import Router from 'koa-router';

const PORT = '6666';

const app = new Koa();
const router = new Router();

router.get('(.*)', (ctx) => {
  ctx.body = 'Hello World';
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Sever Listen on Port: ${PORT}`);
});
