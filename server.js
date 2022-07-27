'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '3.6.39.159';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h2 style="color: purple"> Java Home Docker App<h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
