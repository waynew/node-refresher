const net = require('node:net');

const server = net.createServer(function(socket){
    socket.write('echo server\r\n');
    socket.pipe(socket);
});

server.listen(5000, '127.0.0.1');
