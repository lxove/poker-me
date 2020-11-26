var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('a user connected');
  var data = 42;
  socket.emit('Hello world', data);
});

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
