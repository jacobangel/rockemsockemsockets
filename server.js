const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hi!');
});

const port = 30004;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});

