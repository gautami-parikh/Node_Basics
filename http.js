//Http module creates a web server with node.js
const http = require('http'); 
const server = http.createServer((req,res)=>{
   /* //req : client reguest
    res.write('hello world from node.js');
    //send response
    res.end(); *///it is a simple method for response sending
    
    //if it is root domain
    if(req.url === '/'){
        res.write('hello world from node.js');
        res.end();
    }else{
        res.write('using some other domain');
        res.end();
    }
}); //create object

//port 
server.listen('3000');