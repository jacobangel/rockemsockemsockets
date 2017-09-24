const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const isOpen = ({ readyState }) => readyState === WebSocket.OPEN;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hi!');
});

const server = http.createServer(app);
const socketServer = new WebSocket.Server({ server });

socketServer.on('connection', (ws, req) => {
  ws.on('message', (message) => {
    console.log(`socket server message ${message} form user ${req}`);
    socketServer.clients.forEach(client => {
      // don't rebroadcast to yourself!
      if (client !== ws && isOpen(client)) {
        console.log(`sending to all: ${message}`);
        client.send(message);
      }
    });
  });
});

socketServer.broadcast = function broadcast (data) {
  socketServer.clients.forEach(client => {
    if (isOpen(client)) {
      console.log(`broadcasting: ${message}`);
      client.send(data);
    }
  })
}

const port = 30004;
server.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});

