const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
var app = express();
var upload = multer();
app.use(express.static('public'));

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: './tmp/'
}).single('updfile'));


app.get('/pages/:pageName', function(req, res) {
    var fileName = __dirname + "/public/html/" + req.params.pageName + ".html"
    console.log("get page : " + req.params.pageName);
    res.sendFile(fileName, function(err) {
        if (err) {
            console.error(err);
            res.status(err.status).send("404 Not Found");
        }
    });
});
app.get('/formgetdata', function(req, res) {
    resp = {
        fName: req.query.first_name,
        lName: req.query.last_name
    }
    res.end(JSON.stringify(resp));
})

app.post('/formpostdata', function(req, res) {
    resp = {
        fName: req.body.first_name,
        lName: req.body.last_name
    }
    res.end(JSON.stringify(resp));
})

app.post('/fileupload', function(req, res) {
    console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.mimetype);
    var file = __dirname + '/uploads/' + req.file.originalname;
    fs.readFile(req.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

app.listen(8080, function() {
    console.log("Server started @port 8080");
})
