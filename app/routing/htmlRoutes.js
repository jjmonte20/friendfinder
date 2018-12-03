// this application is meant to get a route for /survey
// also meant to have a catch-all route that leads to home.html
const path = require("path");

// need to get app
module.exports = function (app) {

   // want this to route to the survey html
   app.get("/survey", function (req, res) {
       res.sendFile(path.join(__dirname + "/../public/survey.html"));
   }); 

   // want to index to be the default page
   app.use(function (req, res) {
       res.sendFile(path.join(__dirname + "/../public/index.html"));
   });
}