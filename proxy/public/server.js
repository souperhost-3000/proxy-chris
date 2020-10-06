const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname)))

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`running on ${PORT}`)
})
