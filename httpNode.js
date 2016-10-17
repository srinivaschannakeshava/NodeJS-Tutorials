const http = require('http');
http.createServer(function(request, response) {
    console.log(request);
    response.writeHead(200, {
        'content-type': 'application/json'
    });
    response.end('{\'hello\:\'httpNode\'}');
}).listen(8080);
console.log("server listen on 8080 port");
