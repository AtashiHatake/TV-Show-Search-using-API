/* 
SPREAD : this basically opens up an array/object/text/word and returns each element/key-value pair/letter

syntax : ...arrayName/text/objectName
*/

const num = [21, 343, 653, 634, 452, 4532, 4567, 3463, 7867, 2487];

console.log(
  Math.max(num)
); /* This returns NaN because it can't open up an array without the use of a for loop */

// Using spread
console.log(Math.max(...num));
/* this returns 7867 because using spread the array was opened up */

console.log("opened up array : ", ...num);

// spread for text
console.log("printing each letter of hello :", ..."hello");

// Spread in array literals
const cats = ["Kimo", "Lily"];
const dogs = ["Oscar", "Sultan"];

/* instead of mearging them using array methods we can use spread */

const allPets = [...cats, ...dogs];

/* the allPets array is a differnt and new array */
console.log(dogs);
console.log(allPets.push("Parrot"), allPets);
console.log(cats);
/* the .push method changes the allPets array not the cats array */

// SPREAD WITH OBJECTS
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

// If we spread an object it gives the same object
console.log("Object spread : ", { ...feline });

// We can combine two objects
const catDog = { ...feline, ...canine };
console.log('catDog combine spread : ',catDog);
/* 
now here the order matters in catDog both species have the key 'family' in them since canine is 2nd in order it overrides the family of feline hence it prints family: 'Caninae' and not 'Felidae'. 
*/

// We can add extra information to the new object using spread

const userOfSite = {
  email: "xyz@gmail.com",
  password: "xyz1999",
  username: "Houndz",
};

const newUsr = { ...userOfSite, id: 927391, isAdmin: false };
console.log("admin side information of new user : ", newUsr);
/* 
hence we can use functions and add extra admin-side information of a new user which is not visible to the user but only visible to the admin.
*/
