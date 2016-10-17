const express = require('express');
const fs = require('fs');
var app = express();
app.use(express.static('public'));
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/pages/:pageName', function(req, res) {
    var fileName = __dirname + "/public/html/" + req.params.pageName + ".html"
    console.log("get page : " + req.params.pageName);
    res.sendFile(fileName, function(err) {
        if (err) {
            console.error(err);
            res.status(err.status).send("404 Not Found");
        }
    });
    /*fs.readFile(fileName, function(err, data) {
        if (err) {
            res.send("Doesn't exist"+err);
        } else {
          res.set('Content-Type', 'text/HTML');
            res.send(data);
        }
    })*/
})
app.listen(8080, function() {
    console.log("Server started @port 8080");
})
