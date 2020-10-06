const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname)));
// app.use('/availability/:listing_id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
// app.use('/api/listings', createProxyMiddleware({ target: 'http://localhost:3007', changeOrigin: true }));
// app.use('/api/images/:listing_id', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/reviews/:listing_id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running on ${PORT}`)
})
