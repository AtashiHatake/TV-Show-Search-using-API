// arrow functions
const sum = (x, y) => {
  return x + y;
};

console.log(sum(1, 2));

// empty arrow function
// you NEED to have the empty parenthesis ()
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 100) + 1);

/*-------------------------------------------------*/

// implicit functions : if a code is one liner then you don't need to use the keyword RETURN and no need to use curly braces. There are two ways.

// #1
const isEven = (num) => num % 2 === 0;

// #2
const isOdd = (numb) => numb % 2 !== 0;
