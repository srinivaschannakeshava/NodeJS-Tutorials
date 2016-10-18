const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/listusers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.set('Content-Type','application/json').end(data);
    });
})

app.get('/user/:id', function(req, res) {
    var userid = req.params.id;
    var file = __dirname + "/" + "users.json";
    fs.readFile(file, 'utf8', function(err, data) {
        // console.log(data);
        data = JSON.parse(data);
        res.set('Content-Type','application/json').end(JSON.stringify(data["user" + userid]));
    });
})

app.put('/adduser', function(req, res) {
    // var newUser=req.body
    var user = req.body;
    var file = __dirname + "/" + "users.json";

    fs.readFile(file, 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["user" + user.id] = user;
        console.log(data);
        fs.writeFile(file, JSON.stringify(data), function(err) {
            if (err) {
                return console.log(err);
            }
            res.set('Content-Type','application/json').end(JSON.stringify(data));
        })
    });
})

app.delete('/deleteuser/:userID', function(req, res) {
    var userid = req.params.userID;
    // console.log(userid);
    var file = __dirname + "/" + "users.json";

    fs.readFile(file, 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + userid];
        // console.log(data);
        // console.log('------------------------------------------');
        fs.writeFile(file, JSON.stringify(data), function(err) {
            if (err) {
                return console.log(err);
            }
            res.set('Content-Type','application/json').end(JSON.stringify(data));
        })
    });
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("REST app listening at http://%s:%s", host, port)
})
