const http = require('http');
const fs = require('fs');

//First example
/*
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('Hello world');
        res.end();
    } else {
        res.write('Wrong domain');
        res.end();
    }
});

server.listen('3000');
*/

http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-type' : 'text/html'});
    readStream.pipe(res);
}).listen(3000);