let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

let age = parseInt(prompt("Enter your age : "));
while (age >= 18) {
  console.log("You are eligible to drive.");
  break;
}
console.log("SORRY! you are NOT eligible to drive.");

// break statement is very important to stop the loop form running infinitely.

// while loop is mainly used for varying values (eg: game loops)
// for loop is used for a known value (eg : array)
