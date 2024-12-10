const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) =>{

    console.log("Method/verb: " + request.method);
    
    console.log("URL: " + request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Aula Backend');
});

server.listen(port, host, () => {
    console.log(`Servidor executando http://${host}:${port}`);
});
