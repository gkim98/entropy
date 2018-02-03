var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Build Firebase credential with the Facebook access token.
var credential = firebase.auth.FacebookAuthProvider.credential(access_token);

// Sign in with credential from the Google user.
firebase.auth().signInWithCredential(credential).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
    

app.get("/", function(req, res) {


    res.render("home");
});

app.listen(app.get('port'), function() {
    console.log("App running on " + app.get('port'));
});
