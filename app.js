var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.set('port', (process.env.PORT || 5000));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.listen(app.get('port'), function() {
    console.log("App running on " + app.get('port'));
});