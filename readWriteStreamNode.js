const fs = require('fs');
var data = ''
var readStream = fs.createReadStream('testDoc.json');
// var writeStream = fs.createWriteStream('copyTestDoc.json')

readStream.setEncoding('UTF8');
readStream.on('data', function(chunk) {
    data += chunk;
});
readStream.on('end', function() {
    console.log(data);
    // writeStream.write(data, 'UTF8');
    // writeStream.end();
})
readStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Read Program Ended");

/*
writeStream.on('finish', function() {
    console.log("write completed");
});
writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Write Program Ended");
*/

var readerStream = fs.createReadStream('testDoc.json');

// Create a writable stream
var writerStream = fs.createWriteStream('output.json');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Pipe Program Ended");
