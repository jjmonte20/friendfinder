// need to get the existing friends
const friends = require("../data/friendfinder.js");

// will need to export this function to server.js
module.exports = function(app) {
    // need this to be located at api friends
    app.get("/api/friends", function(req, res) {
        // this only needs to show the json objects of the friends that exist
        res.json(friends);
    });
}

// needs a GET route with the url /api/friends,
// will display all of the JSON for all the possible matches

// needs a POST route /api/friends.  This will be used to handle incoming survey results