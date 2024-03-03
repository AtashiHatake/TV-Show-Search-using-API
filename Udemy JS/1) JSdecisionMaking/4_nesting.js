const password = prompt("please enter a password");

// Password must be 6+ characters
// if (password.length >= 6) {
// console.log("Long enough password");
// } else {
//   console.log("password must be 6+ characters");
// }

// Password must not have space
/*
for this we use .indexOf() 
this gives index of a character in this blank space (' ')
*/

// if (password.indexOf(" ") === -1) {
//   console.log("godd password has no space");
// } else {
//   console.log("password must not contain space.");
// }

console.log(
  password.indexOf(" "),
  "this gives a value of -1 as there is no blank space in the given text."
); /* this returns a value of -1 */

// now nesting these two conditional statements.

// Password must be 6+ characters
if (password.length >= 6) {
  // Password must not have space
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("password must not contain space.");
  }
} else {
  console.log("password must be 6+ characters");
}
