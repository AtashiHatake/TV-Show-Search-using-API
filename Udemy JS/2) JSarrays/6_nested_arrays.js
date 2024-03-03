// we can store arrays inside arrays.
// storing a tick tack toe board using nested arrays.
// the inner arrays are seperated by a comma.
const board = [
  ["O", null, null],
  [null, "X", "O"],
  ["X", "O", null],
];

console.log(board);

console.log("the middle element of the middle array : ", board[1][1]);

console.log("the last element of the first array : ", board[0][2]);
