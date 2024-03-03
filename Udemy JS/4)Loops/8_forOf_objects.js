const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// these are not iterable

for (let person in testScores) {
  console.log(`${person.toUpperCase()} scored ${testScores[person]}`);
}

// console.log(person) gives the KEY.
// console.log(testScores[person]) gives the VALUE.

let avg = 0;
let len = Object.values(testScores);

for (let score of Object.values(testScores)) {
  console.log(score);
  avg = avg + score;
}

console.log(`average marks : ${avg / len.length}`);
