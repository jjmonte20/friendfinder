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
    photo: "https://secure.i.telegraph.co.uk/multimedia/archive/02869/big_bird1_2869483b.jpg",
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
        3
    ]
},{
    routeName: "oscarTheGrouch",
    name: "Oscar the Grouch",
    photo: "https://ids.si.edu/ids/deliveryService?id=NMAH-JN2018-01024-000004&max=300",
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
    photo: "https://upload.wikimedia.org/wikipedia/en/7/74/Elmo_from_Sesame_Street.gif",
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
    photo: "https://cnet4.cbsistatic.com/img/l5Ot1KCGMZg0qnjBxt2_s3RIERw=/970x0/2018/09/25/5b1a7cdf-f052-41f4-9ebb-3357f855f36c/mygod.jpg",
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