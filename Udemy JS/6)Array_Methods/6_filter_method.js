// Filters and creates a new array with elements that pass the test implemented by the provided function.

/* 
1) Use MAP when you want to transform each element and create a new array.

2) Use forEach when you want to perform an action on each element without creating a new array.

3) Use for...of when you want to loop through the values of an iterable.

4) Use filter when you want to create a new array containing elements that satisfy a condition.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenNos = numbers.filter((n) => {
  return n % 2 === 0;
});

console.log(`Done with filter : ${evenNos}`);

const evenNo = numbers.map((num) => {
  if (num % 2 === 0) return num;
});
console.log(`Done with map : ${evenNo}`);

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

const highRated = movies.filter((r) => r.score > 80); // Implicit function
const goodTitles = highRated.map((titles) => titles.title);
console.log(
  `Good titles mapped using Map on filtered highly rated movies using Filter : `,
  goodTitles
);
// using map and filter together

// another way of using map and filter together :
const greatTitles = movies.filter((m) => m.score > 80).map((ti) => ti.title);
console.log(`using Filter and Map in one line : `, greatTitles);


console.log(`highly rated movies : `, highRated);
// to get the print type highRates in console.
