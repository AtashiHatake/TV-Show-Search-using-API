const scores = [4355, 6456, 8766, 5464, 2134, 7643, 8895];

/* 
Let's say we want to put the first 3 scores into gold, silver and bronze and the rest values as everyoneElse, we can do that using destructuirng.
*/

const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold); // this copies the first value from scores array

console.log(everyoneElse); // ...rest makes an array of the rest of the elements.