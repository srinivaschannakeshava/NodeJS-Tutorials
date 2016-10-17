const express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("Get request");
    res.send("Hello Express GET...")
})

app.post('/post', function(req, res) {
    console.log("Post request /post");
    res.send("Hello Express POST...")
})

app.put('/put', function(req, res) {
    console.log("Post request /put");
    res.send("Hello Express PUT...")
})

app.delete('/delete', function(req, res) {
    console.log("Post request /delete");
    res.send("Hello Express DELETE...")
})

app.get('/12*', function(req, res) {
    console.log("GET request WILD Letter ");
    res.send("Hello Express WILD Letter..." )
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
