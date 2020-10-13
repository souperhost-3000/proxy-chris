const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/images/:listing_id', createProxyMiddleware({ target: 'http://18.189.28.162/', changeOrigin: true }));
app.use('/availability/:listing_id', createProxyMiddleware({ target: 'http://18.188.98.115/', changeOrigin: true }));
app.use('/api/reviews/:listing_id', createProxyMiddleware({ target: 'http://34.221.230.87/' }));
app.use('/api/listings/:listing_id', createProxyMiddleware({ target: 'http://34.221.67.0/', changeOrigin: true }));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running on ${PORT}`)
})
