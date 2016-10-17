const zlib = require('zlib');
const fs = require('fs');
fs.createReadStream('testDoc.json').
pipe(zlib.createGzip()).
pipe(fs.createWriteStream('testDoc.json.gz'));
console.log("File Compressed.");
