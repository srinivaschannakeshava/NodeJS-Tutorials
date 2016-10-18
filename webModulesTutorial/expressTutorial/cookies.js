var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
   console.log("Cookies: ", req.cookies)
   res.end(JSON.stringify(req.cookies));
})
app.listen(8080,function(){
  console.log('Listning on 8080' );
})
