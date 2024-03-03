/* 
PUSH - add to end
POP - remove from end
UNSHIFT - add to start
SHIFT - remove from start
*/

let movie_comers = ["jan", "michael", "dwight", "jim", "pam"];

console.log(`Unchanged array : `, movie_comers);

// .shift() : removes first element and stores it
console.log(`removing the first person "jan" : `, movie_comers.shift());
console.log(`changed array : `, movie_comers);

// .unshift() : adds new element to the start.
console.log(
  `adding Andy to start of the line because he is angry : `,
  movie_comers.unshift("andy")
);
console.log(`Andy is no more angry : `, movie_comers);

