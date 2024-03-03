let maxNum = parseInt(prompt("enter a max number you want"));
while (!maxNum) {
  maxNum = parseInt(prompt("enter a valid number please."));
}
/* 
This is an while loop that checks whether maxNum is falsy. In JavaScript, NaN is considered falsy. The ! operator is a logical NOT operator, so !maxNum is true when maxNum is NaN or any other falsy value.

NaN is falsy.
*/

const toGuess = Math.floor(Math.random() * maxNum) + 1;

let tries = 1;
let guess = prompt("enter your guess");

while (parseFloat(guess) !== toGuess) {
  tries++;
  if (guess === "q") break;
  if (toGuess > guess) {
    guess = prompt("your guess is smaller");
  } else {
    guess = prompt("your guess is larger");
  }
}
if(guess === 'q') {
    console.log("Okay, quitting. Thank you for playing");
} else {
    console.log(`Congrats you guesssed it right. It took you ${tries} guess(es)`);

}