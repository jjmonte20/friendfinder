// need to get the existing friends
var friends = require("../data/friendfinder.js");

// will need to export this function to server.js
module.exports = function(app) {
    // need this to be located at api friends
    app.get("/api/friends", function(req, res) {
        // this only needs to show the json objects of the friends that exist
        res.json(friends);
    });

    // want in case user is looking for a specific friend
    app.get("/api/friends/:friend", function(req, res){
        var chosen = req.params.friend;

        console.log(chosen);

        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i])
            }
        }

        return res.json(false);
    });

//     // needs a POST route /api/friends.  This will be used to handle incoming survey results
//     app.post("/api/friends", function(req, res) {
//     // start by making the body of what the user searched be the answers
//         var newFriend = req.body;

//         // remove the spaces in the name
//         newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//         console.log(newFriend);

//         friends.push(newFriend);

//         res.json(newFriend);
// });
}
// everything needs to be in the module.exports app
