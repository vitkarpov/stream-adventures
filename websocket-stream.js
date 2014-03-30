var wss = require('websocket-stream')('ws://localhost:8000');

wss.read('hello\n');
