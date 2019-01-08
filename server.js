
var express = require("express");

var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var PORT = 3000;


app.use(express.static("public"));
app.use(require('./app/routing/htmlRoutes'));
app.use(require('./app/routing/apiRoutes'))

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});