const fs = require('fs');
var data = fs.readFileSync('testDoc.json')
    //blocking read
console.log(data.toString());
console.log("Blocking read");

fs.readFile('testDoc.json', function(error, data) {
    if (error) {
        return console.error(error);
    }
    console.log(data.toString());
})
console.log("non Blocking read");
