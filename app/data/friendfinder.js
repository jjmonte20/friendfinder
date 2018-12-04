// Data for results
// Default start with 4
// console.log("connected");
// want the results in an array of objects
var friends = [
    // each object will have a friend
    {
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
    name: "Gritty",
    photo: "../public/images/gritty.jpg",
    score: [
       1,
       2,
       3,
       4,
       5,
       1,
       2,
       3,
       4,
       5 
    ]
}
]

module.exports = friends