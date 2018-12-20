// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(__dirname + '/public/dist/public'));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)


app.listen(8001, function () {
    console.log("listening on port 8001");
})
