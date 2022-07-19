//read and write data
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
//     console.log('Success');


//alernate to chunk wala part
// readStream.pipe(writeStream);// alternate to this for compression is given below
const zlib = require('zlib'); //compression
//transfrom stream
//manipulate into something else
const gzib = zlib.createGzip();
readStream.pipe(gzib).pipe(writeStream);
    // console.log(chunk);
// });
//chunk means i don't need to wait for whole file to manipulate it 
//send it to new file
/*
WHy use streams
-because there is buffered size of readfiles
but in stream it doesn't have any issue regarding the buffer
Stream uses buffer too but very small not full sized buffer
it is not reading the file at a time it uses chunk*/
//Pipe and pipe chaining - we can transform the streams using pipe


