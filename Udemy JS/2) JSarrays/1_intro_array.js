/*
ARRAYS are like pill boxes labelled with week days.
they are collection of datas arranged by ORDERS, eg : ordered by time.
*/

// how to make an empty array

let colours = []; //empty array

// an array of STRING
let pets = [`dog`, `cat`, `parrot`, `hamster`];

// an array of NUMBERS
let RollNo = [12, 23, 45, 69];

// a MIXED array
let random = [null, 87, `hello`, 28.17627, false, NaN];
// an array can have any kind of DATA-TYPE.

// ARRAY RANODM ACCESS

// arrays have index system similar to strings where 1st element starta from zero.

let WeekDays = [`monday`, `tuesday`, `wednesday`];

console.log(WeekDays.length); // length of array is 3 as there are 3 elements.

console.log(WeekDays[2]); //this fetches the 2nd index of the array.

//getting any letter of any element of an array :
console.log(
  `The 3rd letter of the first element "monday" :  ${WeekDays[0][2]}`
);

// Update/change an array
let col = ["rad", "green", "blue", "yallo"];

console.log(`updating 'rad' to 'red' : `, (col[0] = "red"));
console.log(`updating 'yallo' to 'yellow' : `, (col[3] = "yellow"));

console.log(col);
// the updating completely updates the array FOREVER

// adding to array
console.log(`adding elements to array : ${(col[4] = "INDIGO")}`);
console.log("now INDIGO is forever part of array", col);
// what will happen if we add an element at index 10?

console.log(`adding element at index 10, ${(col[10] = 999)}`);

console.log(`interesting the array now has 6 blank elements : `, col);

console.log("what is in index 6? : ", col[6]);
console.log("what is in index 8? : ", col[8]);
console.log("what is in index 10? : ", col[10]);


