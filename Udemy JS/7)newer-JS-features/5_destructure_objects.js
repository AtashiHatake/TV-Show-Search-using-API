/* 
Destructuring makes much more sense for objects as we can use Keys to single out the Values from Key-Value pairs and give them a variable.
*/

const walterWhite = {
  firstName: "Walter",
  lastName: "White",
  email: "walter.white@email.com",
  bio: "High school chemistry teacher turned methamphetamine manufacturer.",
  address: "123 Blue Sky Lane, Albuquerque, NM",
  state: "New Mexico",
  password: "Heisenberg123",
  born: "August 12, 1965",
  death: "October 11, 2023",
};

const skylerWhite = {
  firstName: "Skyler",
  lastName: "White",
  email: "skyler.white@email.com",
  state: "New Mexico",
  born: "May 17, 1970",
};

const { firstName, lastName, address, ...everythingelse } = walterWhite;

// how to rename your variables
const { death: deathYear, born: birthYear } = walterWhite;

const { state, born, died = "N/A" } = skylerWhite;

// this is how we give a default value to something that does not exist.

// destructuring parameters

function fullName({ firstName, lastName }) {
  return `Hello! ${firstName} ${lastName}`;
}
// in this we we destructure the object in parameters itself.

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
    title: "Avatar",
    score: 82,
    year: 2009,
  },
];

// Let's say we only want title and score of a movie
// normal way
const movieTitle = movies.map((mov) => {
  return `${mov.title} (score : ${mov.score})`;
});
console.log(`done using normal way : `, movieTitle);

// using destructuring

const movTitle = movies.map(
  ({ title, score }) => `${title} (score : ${score})`
);
console.log(`done using Destructuring Parameters : `, movTitle);

// both of them work but using destructuring is better and it's easier to read.
