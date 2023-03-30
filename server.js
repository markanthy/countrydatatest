const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

module.exports = app.prepare().then(() => {
  return async function (context, req) {
    const { req: request, res: response } = context;
    const parsedUrl = parse(request.url, true);
    handle(request, response, parsedUrl);
    context.res = {
      body: response,
      headers: response.headers,
      statusCode: response.statusCode,
    };
  };
});