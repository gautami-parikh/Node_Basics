const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    // const readStream = fs.createReadStream('./static/index.html');
    // const readStream = fs.createReadStream('./static/example.json');
    const readStream = fs.createReadStream('./static/example.jpg');
    //response header - what kind of data
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.writeHead(200,{'Content-type':'application/json'});
    res.writeHead(200,{'Content-type':'image/jpg'});
    /*
    type of file -- path -- content type
    jpg--./static/example.jpg--image/jpg
    json--./static/example.json--application/json */
    readStream.pipe(res);
    
}).listen('3000');