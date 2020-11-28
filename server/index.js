var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', socket => {
//   console.log('a user connected');
//   var data = 'Servern säger hej';
//   socket.emit('Hello world', data);
// });

io.on('connection', socket => {
  socket.on('send message', msg => {
    console.log('message: ' + msg);
    io.emit('recieve message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
