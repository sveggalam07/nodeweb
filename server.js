'use strict';

const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h2 style="color: purple">Successfully running the Node App!<h2>');
});

app.listen(PORT);
console.log(`Running`);
