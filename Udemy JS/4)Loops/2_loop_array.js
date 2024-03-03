let animals = ["lions", "tigers", "cats"];

console.log("array starts normally");
// array starting from start
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

console.log("array starts from end");
// array starting from end
for (let n = animals.length - 1; n >= 0; n--) {
  console.log(n, animals[n]);
}

// we use let n = animals.length - 1 so that index starts from 0 and ends at 2 and not 3.
