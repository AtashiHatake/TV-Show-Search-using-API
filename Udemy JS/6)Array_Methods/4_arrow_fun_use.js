const movies = [
  { title: "Inception", score: 88 },
  { title: "The Dark Knight", score: 90 },
  { title: "Interstellar", score: 86 },
  { title: "Pulp Fiction", score: 89 },
];

const rating = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10}`
));
