let age = 15;

if (age >= 18) {
  console.log("YAAY YOU ARE AN ADULT");
} else if (age === 15) {
  console.log(`sorry try ${18 - age} years later`);
} else if (age === 12) {
  console.log(`you are a child.`);
}

//amusment park
/* 
0-5 free
5-10 child $10
10-65 adult $20
65+ senior $10
*/
let pro = prompt("Enter your age.");
let life = parseInt(pro);

if (life <= 5) {
  console.log("you can go for free.");
} else if (life <= 10) {
  console.log("you are a child you have to pay $10");
} else if (life <= 65) {
  console.log("you are an adult you have to pay $20");
} else if (life <= 150) {
  console.log("you are a senior citizen you have to pay $10");
}

// same thing using else
/* 
0-5 free
5-10 child $10
10-65 adult $20
65+ senior $20
*/
if (life <= 5) {
  console.log("you can go for free.");
} else if (life <= 10) {
  console.log("you are a child you have to pay $10");
} else {
  console.log("you are an adult you have to pay $20");
}

console.log(life === 18);
