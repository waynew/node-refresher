const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-My-Thing', 'one');
    res.end('Heeeeey dude!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
