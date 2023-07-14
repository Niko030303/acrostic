const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiProxy = createProxyMiddleware('/api', {
  target: process.env.API_BASE_URL,
  changeOrigin: true,
});

app.prepare().then(() => {
  const server = express();

  server.use('/api', apiProxy);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});