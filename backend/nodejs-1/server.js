const { createServer } = require('node:http');

const host = 'localhost';
const port = 3000;

const app = createServer((request, response) => {

    const { url, method } = request;
    console.log("URL: " + url);
    console.log("Methods: " + method);
    
    if(url === '/'){
        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("NodeJS");
    }

    if(url === '/products'){
        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Products");
    }

    response.writeHead(404, { 'Content-type': 'text/plain'});
    return response.end("Not Found");

});

app.listen(port, host, () => {
    console.log(`Servidor NodeJs executando http://${host}:${port}`)
});