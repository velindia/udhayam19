// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});
app.listen(process.env.PORT||4000);
console.log('4000 is the magic port');
