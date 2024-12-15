const { createServer } = require('node:http');
const Products = require('./routes/products');
const Users = require('./routes/users');
const routes = require('./routes/router');

const host = 'localhost';
const port = 4000;

const app = createServer((request, response) => {

    const { url, method } = request;
    console.log("URL: " + url);
    console.log("Methods: " + method);

    
    
    if(url === '/'){
        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("NodeJS");
    }

    if(!routes[url] || !routes[url][method]){
        response.writeHead(404, { 'Content-type': 'text/plain'});
        return response.end("Not Found");
    }

    const data = routes[url][method];
    response.writeHead(200, { 'Content-type': 'text/plain'});
    return response.end(JSON.stringify(data));



});

app.listen(port, host, () => {
    console.log(`Servidor NodeJs executando http://${host}:${port}`)
});