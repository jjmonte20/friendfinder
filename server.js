// want express, less typing to get sites in an online server
const express = require("express");
// const for app
const app = express();
// port I will be using, only need one server
const PORT = 8080;
// require file system
const fs = require("fs");

// when port is accessed, should go to the home page
// app.get("/", function(req, res){
// });

// // testing json for characters
// app.get("/gritty", function(req, res){
//     res.json(gritty);
// });

// app.get("/bigBird", function(req, res){
//     res.json(bigBird);
// });

// app.get("/elmo", function(req, res){
//     res.json(elmo);
// });

// app.get("/oscar", function(req, res){
//     res.json(oscar);
// });

// here's where I'm requiring all of the files from other folders
// passing in app as an argument since we've already defined app in this js file as express
// the routing html files
// apiRoutes needs to go first since it's in a seperate file from the default and survey html files, and we're only showin JSON in it
// otherwise, the a ref for API friend finder won't know where to go
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log(PORT + " is connected, listening...")
});
