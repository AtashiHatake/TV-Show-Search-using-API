// if an user does not type in the parameters for a function we need a default value

// example
const rollDice = (noSides = 6) => {
  return Math.floor(Math.random() * noSides) + 1;
};

// lets put a default value for noSides = 6 because the most common dice is a 6 sided dice.
// so now even if we pass the function blank it will run with the default value of 6.

// example 2 : ORDER matters

const greet = (msg, person) => {
  console.log(`${msg}, ${person}!`);
};

const greet2 = (msg = "meow", person) => {
  console.log(`${msg}, ${person}!`);
}; // this does not work because it takes the only argument as "msg" not person's name so it prints "Khitam, undefined"

//right way

const greet3 = (person, msg = "meow") => {
  console.log(`${msg}, ${person}!`);
}; // this returns "meow, Khitam" because it takes the only given argument as the person's name.
