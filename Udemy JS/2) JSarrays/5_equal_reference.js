console.log("[1,2,3] == [1,2,3] : ", [1, 2, 3] == [1, 2, 3]);
console.log("[1,2,3] === [1,2,3] : ", [1, 2, 3] === [1, 2, 3]);
/*
This returns false because both the aarrays have equal values stored in them BUT their identity in memory is different. To understand it better see the bottom example. 
*/

let num = [1, 2, 3];
let num_copy = num;

console.log(`num_copy has the value of num : `, num_copy);
console.log(
  `num == num_copy`,
  num == num_copy,
  `, this gives a true because reference of both of them is the same memory allocation they have the same ID.`
);

let n = num.pop();
console.log(
  `after passing "let n = num.pop();" lets see value of num_copy : `,
  num_copy,
  `since num and num_copy have the same reference they are equal.`
);

// === and == don't check for the values inside the array they check if the two arrays are the SAME thing.

// const + array

const mob_num = [1, 2, 3, 4];
console.log(mob_num);
console.log(mob_num.reverse());

let mob_num = [2, 334, 5, 5, 56];
// this gives an error as the name(shell) of the array is constant
