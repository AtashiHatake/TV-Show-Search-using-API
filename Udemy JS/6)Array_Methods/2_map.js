// MAP : creates a new array with the result of calling a callback on every element in the array.

// basically when a thing is performed on an array for example multiplication, the MAP will make a new array and store the new values

const texts = ["rofl", "lol", "omg", "ttyl"];

const caps_text = texts.map(function (cap) {
  return cap.toUpperCase();
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const square = numbers.map(function (sq) {
  return sq ** 2;
});
console.log(numbers, square);

const movies = [
  { title: "Inception", score: 88 },
  { title: "The Dark Knight", score: 90 },
  { title: "Interstellar", score: 86 },
  { title: "Pulp Fiction", score: 89 },
];

const titles = movies.map(function (movies) {
  return movies.title.toUpperCase();
});
console.log(titles);

