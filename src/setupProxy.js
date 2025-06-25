const { createProxyMiddleware } = require('http-proxy-middleware');

// const METABASE_API_DOMAIN = 'https://metabase.interviewbit.com/api/session';
const METABASE_API_DOMAIN = 'http://localhost:6001';

module.exports = function (app) {
  app.use(
    '/metabase-api',
    createProxyMiddleware({
      target: METABASE_API_DOMAIN,
      changeOrigin: true,
      logger: console,
      logLevel: 'debug',
    }),
  );
};
