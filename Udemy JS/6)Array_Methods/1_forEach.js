const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach(function (el) {
  console.log(el);
});

for (let x of numbers) {
  if (x % 2 === 0) {
    console.log(`even NOs : ${x}`);
  }
}

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },

  {
    title: "Stand By Me",
    score: 85,
  },

  {
    title: "Parasite",
    score: 95,
  },

  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach(function (movie) {
  console.log(`Using forEach : ${movie.title} : ${movie.score}/100`);
});

for (let mov of movies) {
  console.log(`Using for...of : ${mov.title} : ${mov.score}/100`);
}
