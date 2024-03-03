// Every
const marks = [78, 98, 99, 96, 77, 89, 80];

const passing = marks.every((score) => score > 75);

console.log(passing);

// Some checks if at least one thing follows the given condition.

const movies = [
  {
    title: "Inception",
    score: 88,
    year: 2010,
  },
  {
    title: "The Dark Knight",
    score: 90,
    year: 2008,
  },
  {
    title: "Interstellar",
    score: 86,
    year: 2014,
  },
  {
    title: "Pulp Fiction",
    score: 89,
    year: 1994,
  },
  {
    title: "Avatar",
    score: 82,
    year: 2009,
  },
  {
    title: "Forrest Gump",
    score: 93,
    year: 1994,
  },
  {
    title: "The Room",
    score: 26,
    year: 2003,
  },
  {
    title: "Batman & Robin",
    score: 11,
    year: 1997,
  },
  {
    title: "Catwoman",
    score: 9,
    year: 2004,
  },
  {
    title: "Troll 2",
    score: 6,
    year: 1990,
  },
];

const movi = movies.some((moviess) => moviess.year > 1999);
console.log(movi);

// reduce : it accumulates all the elements and returns the value

const prices = [1.99, 20.33, 67.9, 1.5];

const totalPrice = prices.reduce((tot, currentPrice) => {
  return tot + currentPrice;
});
console.log(`total price : $${totalPrice}`);

const lowestPrice = prices.reduce((min, currentPrice) => {
  if (currentPrice < min) {
    return currentPrice;
  }
  return min;
});

console.log(`Min price : ${lowestPrice}`);
