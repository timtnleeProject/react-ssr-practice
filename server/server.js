/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Koa from 'koa';
import Router from 'koa-router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serve from 'koa-static';

import App from '../client/App';

const PORT = '3679';

const app = new Koa();
const router = new Router();

app.use(serve('clientBuild', {
  index: false,
}));

router.get('(.*)', (ctx) => {
  const result = renderToString(
    <StaticRouter location={ctx.request.url}>
      <App />
    </StaticRouter>,
  );
  // should use index.html template
  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${result}</div>
        <script src="clientBundle.js"></script>
      </body>
    </html>
  `;

  ctx.body = html;
});

app.use(router.routes());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sever Listen on Port: ${PORT}`);
});
