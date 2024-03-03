// Functions that operate on/with other functions.

/*
these functions can :
1) Accept other functions as arguments.
2) These can return a function.
*/

// accepting a function as argument.
let greet = function () {
  console.log(`HI!`);
};

greet();

function callTwice(func) {
  func();
  func();
}
callTwice(greet); // here we pass the valie of greet.

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

callTenTimes(greet);

// returning a function as a value.

function isBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

let isAdult = isBetween(18, 100);

console.log(`is a 20 an adult? : ${isAdult(20)}`);
console.log(`is a 10 an adult? : ${isAdult(10)}`);
console.log(`is a 69 an adult? : ${isAdult(69)}`);

let isChild = isBetween(0, 18);
console.log(`is 9 a child? : ${isChild(9)}`);

// defining "methods"

// methods are basically an object filled with functions
// eg : string methods, math.random(), etc

const myStringMethods = {
  upper_case: function (str) {
    return str.toUpperCase();
  },

  lower_case: function (str) {
    return str.toLowerCase();
  },

  to_italics: function (str) {
    return str.italics();
  },
};

// testing of myStringMethods

console.log(`to upper case : ${myStringMethods.upper_case("hello")}`);

console.log(`to lower case : ${myStringMethods.lower_case("DFJABKAB")}`);

console.log(
  `to italics : ${myStringMethods.to_italics("Cherry")} is beautiful`
);

// SHORT CUT TO WRITE METHODS

const square = {
  area(side) {
    return side * side;
  },

  perimeter(side) {
    return side * 4;
  },
};

// name(parameter) {return .....},
