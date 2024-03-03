/*
How to add an element to an array WITHOUT using index number.
FOR EXAMPLE : what if an array is too long it would be hard to get the hold of the index number.
*/

/* 
PUSH - add to end
POP - remove from end
UNSHIFT - add to start
SHIFT - remove from start
*/

let movie_comers = ["jan", "michael", "dwight", "jim", "pam"];

console.log("People coming to the movie :", movie_comers);

console.log(`Oh even Angela want's to join`);

let angela = movie_comers.push("angela");
// This is an array method used to add a new element to the end of an array.

console.log("new movie comers list : ", movie_comers);
// using such array methods the array is forever changed and will hold the new element till its removed.

/* 
How to remove the last element of an array and store it in a variable?
POP() method does this for us this removes the last element and stores it.
*/
let removed_person = movie_comers.pop();

console.log(
  `The person removed is ${removed_person} and the new array is : `,
  movie_comers
);
// this removes the element forever.
