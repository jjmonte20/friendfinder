# friendfinder

welcome to my friend finder web application

as a user the way to locate your new best friend is to hit the survey button and get started

Once in the survey page, insert your name, and a link to a photo of yourself (note that photo must exist online for it to appear in future friend searches)

then answer the ten questions provided that in which the answers are catagorized from 1 (worst or least likely) to 5 (best or most likely)

once you hit the submit button you will be prompted with your new friend

--------------------------------

The process for this is done by routing your answers into the friendslist api

This api contains all of the json objects for each friend in the array

Hitting submit also sets logic for who your best match for friend will be by using a nested for loop to compare your answers to answers that the friends in the api chose, then dit chooses your friend by selecting the friend from the api that has answers most similar to yours

afterwards, your data is then submitted to this friendslist. so your data can then be searched as well if another user is similar to you.
(word of caution though, there is not persistence of this data if the server goes down)

list of friends includes people who have a name, photo, and an array of answers to the questions answered in the quiz

    btw, routename can be used to look at the json of a particular friend
    routeName: "gritty,
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
       
    routeName: "bigBird",
    name: "Big Bird",
    photo: "https://secure.i.telegraph.co.uk/multimedia/archive/02869/big_bird1_2869483b.jpg",
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
