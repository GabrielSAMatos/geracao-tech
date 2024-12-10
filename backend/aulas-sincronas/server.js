const http = require('http');
const sum = require('./sum');

const server = http.createServer((req, res) => {
    
    let answer = sum(2,3);

    res.write(`${answer}`);
    res.end();
})

server.listen(3000);