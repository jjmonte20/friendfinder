// Data for results
// Default start with 4
// console.log("connected");
// want the results in an array of objects
var friends = [
    // each object will have a friend
    {
    // giving a routename
    routeName: "bigBird",
    // should have a name
    name: "Big Bird",
    // should have a photo
    photo: "../public/images/big_birg.jpg",
    // should also have scores for each question, 10 questions in total
    score: [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
    ]
},{
    routeName: "oscarTheGrouch",
    name: "Oscar the Grouch",
    photo: "../public/images/oscar.jpg",
    score: [
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1,
       1 
    ]
},{
    routeName: "elmo",
    name: "Elmo",
    photo: "../public/images/elmo.jpg",
    score: [
       5,
       5,
       5,
       5,
       5,
       5,
       5,
       5,
       5,
       5 
    ]
},{
    routeName: "gritty",
    name: "Gritty",
    photo: "../public/images/gritty.jpg",
    score: [
       3,
       3,
       3,
       3,
       3,
       5,
       5,
       5,
       5,
       5 
    ]
}
]

module.exports = friends