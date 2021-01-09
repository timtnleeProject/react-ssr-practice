/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Koa from 'koa';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serve from 'koa-static';
import path from 'path';
import fs from 'fs';

import App from '../client/App';

const indexTemplate = fs.readFileSync(path.join(__dirname, '../clientBuild/index.html'), 'utf-8');

const PORT = '3679';

const app = new Koa();
const apiRouter = new Router({
  prefix: '/api',
});
const fallbackRouter = new Router();

// To serve /clientBuild files
app.use(serve('clientBuild', {
  index: false,
}));
// api
apiRouter.get('/', (ctx) => {
  ctx.body = [{
    title: 'aaaa',
  }, {
    title: 'bbb',
  }, {
    title: 'cccc',
  }];
});

// fallback
fallbackRouter.get('(.*)', (ctx) => {
  const result = renderToString(
    <StaticRouter location={ctx.request.url}>
      <App />
    </StaticRouter>,
  );
  // should use index.html template
  const html = indexTemplate.replace(/#{content}/, result);
  ctx.body = html;
});

app.use(apiRouter.routes());
app.use(fallbackRouter.routes());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sever Listen on Port: ${PORT}`);
});
