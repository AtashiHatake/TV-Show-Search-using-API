let eggs = 0; // this is a global variable
function egg() {
  let egg = 6; // this is a local variable and cannot be accesses outside the function.
  console.log(egg);
}

egg();
// console.log(eggs);

// Block Scope
let age = 18;
if (age > 19) {
  let msg = "HIII";
  const PI = 3.141;
}

/* console.log(`Age will print because it is outside : ${age}`);
console.log(`msg will NOT print because it is inside a Block code : ${msg}`);
console.log(`same for PI, it is a Block level code : ${PI}`); */

// Lexical Scope

function bankRobbery() {
  const heroes = ["Iron Man", "Batman", "Black Panther "];

  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}
bankRobbery();

// the inner functions have access to the outer things BUT the outer functions have NO access to inners things.

// Function expression

const add = function (x, y) {
  return x + y;
};
