// AND (&&)
// AND needs both expressions to be TRUE and then only it will display TRUE.

console.log("1 > 0 && 1 < 2 : ", 1 > 0 && 1 < 2, "done using AND(&&)"); // gives true
console.log(`3 > 4 && 1 == "1" : `, 3 > 4 && 1 == "1", "done using AND(&&)"); // gives false
/* the output is false because 3 is NOT greater than 4 and 1 is equal to '1'. It gives false because both of the expressions are not true. */

// password checker using AND (&&) and nesting.
const pass = "atharva";
if (pass.indexOf(" ") === -1 && pass.length === 6) {
  console.log("valid password.");
} else {
  console.log("Password is invalid, incorrect format.");
}

// OR (||)
// OR needs ONE of the TWO expressions to be true.

console.log("1 > 0 || 1 < 2 : ", 1 > 0 || 1 < 2, "done using OR(||)"); // gives true
console.log(`3 > 4 || 1 == "1" : `, 3 > 4 || 1 == "1", "done using OR(||)"); // gives true

// Amusement park exercise using OR(||)
const age = 12;
if ((age >= 0 && age < 10) || age >= 65) {
  console.log("Free entry");
  // here we use &&(AND) because if we use ||(OR) then negative age will be passed as valid age.
} else if (age >= 10 && age < 65) {
  console.log("Pay $20");
} else {
  console.log("invalid age");
}

// NOT(!)
// NOT returns the opposite value.

console.log(`!true : `, !true, `The output is false because we use NOT(!)`); //output is false
console.log(`!false : `, !false, `The output is true because we use NOT(!)`); //output is false

console.log(`1===1 : `, !(1 === 1), `answer is false, because we use NOT!`);

if (!((age >= 0 && age < 10) || age >= 65)) {
  console.log("you have to pay $20 because you are not a baby nor a senior");
} else {
  console.log("You can enter for free because you are a baby or a senior.");
}
/*
we use NOT(!),
therefore people NOT(!) between age 0 AND(&&) 9 OR(||) 65+ are not allowed to go in for free.

*/
