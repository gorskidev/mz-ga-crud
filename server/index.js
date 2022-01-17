const http = require('http');

const requestListener = function (req, res) {
    console.log('request!');
    res.writeHead(200);
    res.end('Hello, World!\n');
}

const server = http.createServer(requestListener);

module.exports = server;