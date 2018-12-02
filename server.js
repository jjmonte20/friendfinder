// want express, less typing to get sites in an online server
const express = require("express");
// const for app
const app = express();
// port I will be using, only need one server
const PORT = 8080;

// when port is accessed, should go to the home page
app.get("/", function(req, res){
});

// testing json for characters
app.get("/gritty", function(req, res){
    res.json(gritty);
});

app.get("/bigBird", function(req, res){
    res.json(bigBird);
});

app.get("/elmo", function(req, res){
    res.json(elmo);
});

app.get("/oscar", function(req, res){
    res.json(oscar);
});

app.listen(PORT, function(){
    console.log(PORT + " is connected, listening...")
});
