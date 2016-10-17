const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log("Request for " + pathName + " received");
    fs.readFile(pathName.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            response.write("Doesnt exist");

        } else {
            //Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            // Write the content of the file to response body
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
