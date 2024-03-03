/*
DEFINING A FUNCTION

function functionName() {
    code
}
*/

function singSong() {
  console.log("tere");
  console.log("liye");
  console.log("jhumu me deewana banke tere liye....");
}
// here function is registered but it won't show anything in the console.

// running function : functionName();

singSong();

// functions and arguments
// arguments are basically inputs from user

// eg : array.push(); whatever you put in () is the input which gets pushed to the array

function avg(n, m) {
  let average = (n + m) / 2;
  console.log(average);
}
avg(20, 25);

function greet(person) {
  console.log(`Hello ${person}! happy to see you.`);
}
greet("Khitam");

// multiple arguments
// seperated by comma and it is in order meaning the first argument will be first parameter.

function greeting(firstName, lastName) {
  console.log(`Hey do I have a Mr. ${firstName} ${lastName[0]}. here?`);
}
greeting("Atharva", "Bhosale");

function add(l, m, n) {
  let sum = l + m + n;
  console.log(`The sum is ${sum}`);
  console.log(`The average is ${sum / 3}`);
}
add(439874, 85498, 224);

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

repeat("$", 10);
repeat(10, "$"); // order of arguments does matter as this code here will not run.
