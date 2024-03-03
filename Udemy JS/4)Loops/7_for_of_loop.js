const subreddits = ["cringe", "books", "chickens", "funny", "pics", "football"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

/*
FOR...OF LOOP

for (variable of iterable) {
    statement
}

*/

for (let sub of subreddits) {
  console.log(`Using for..of loop : Visit reddit.com/r/${sub}`);
}

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let row of seatingChart) {
  for (let students of row) {
    console.log(students);
  }
}

for (let char of "hello world") {
  console.log(char);
}



