const http = require('http');
const server = require('./server/index.js');

server.listen(8080, undefined, undefined, () => {
    console.log('Server is listening');
});

setInterval(() => {
    http.request(
        {
            port: 8080,
            host: 'localhost'
        },
        (response) => {
            let returnData = null;

            response.on('data', (chunk) => {
                returnData = chunk;
            });
 
            response.on('end', () => {
                console.log(returnData.toString('utf8'));
            });
        }
    ).end();
}, 500);