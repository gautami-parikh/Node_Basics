const fs = require('fs');
const readStream = fs.createReadStream('example2.txt.gz');
const writeStream = fs.createWriteStream('uncompreed');
const zlib = require('zlib');
const gunzib = zlib.createGunzip();
readStream.pipe(gunzib).pipe(writeStream);