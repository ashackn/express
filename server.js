
var express = require("express");

var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 



// app.use(express.static("public"));
app.use(require('./app/routing/htmlRoutes'));
app.use(require('./app/routing/apiRoutes'))

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});