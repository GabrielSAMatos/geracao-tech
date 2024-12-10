const { createServer } = require('node:http');
const listProducts = require('./routes/products');

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

        const data = listProducts();

        response.writeHead(200, { 'Content-type': 'application/json'});
        return response.end(JSON.stringify(data));
    }

    if(url === '/products/add'){

        products.push({
            id: 3,
            name: 'Monitor',
            price: 1000.00
        })

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product added successfully");
    }

    if(url === '/products/remove'){

        products.pop()

        response.writeHead(200, { 'Content-type': 'text/plain'});
        return response.end("Product removed successfully");
    }

    response.writeHead(404, { 'Content-type': 'text/plain'});
    return response.end("Not Found");

});

app.listen(port, host, () => {
    console.log(`Servidor NodeJs executando http://${host}:${port}`)
});