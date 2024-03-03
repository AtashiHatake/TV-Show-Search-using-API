const midterms = { danielle: 96, thomas: 78 };
console.log("original marks : ", midterms);

// changing thomas's score to 79
// option 1 : square brackets
midterms["thomas"] = 79;
console.log("marks of Thomas changed using square method : ", midterms);

// object 2 : dot method
midterms.thomas = 99;
console.log("marks of Thomas changed second time : ", midterms);

// experiment using variable to change object
const newMarks = `${(midterms.thomas = 100)}`;
console.log(
  "marks changed using variable EXPERIMENT SUCCESSFUL!!! : ",
  midterms
);

// NESTING ARRAYS AND OBJECTS

// objects IN arrays
const comments = [
  { userName: "Cherry", text: " 🦍🦍🦍", votes: 2198 },
  { userName: "Atharva", text: "jananalli", votes: 69696 },
  { userName: "Rishab", text: "peepeepoopoo check", votes: -1 },
  { userName: "Raviraj", text: "I like sonpapdi🤡", votes: 420 },
];

// accessig Raviraj's text
console.log("Raviraj's text : ", comments[3].text);
console.log("Raviraj's votes : ", comments[3]["votes"]);
// comments[n] is the indexing of the object
// .text or ["text"] is the method to access values through keys

// arrays IN objects
const shoppingMall = {
  hot_deals: ["amazon echo", "amazon kindle", "amazon coupons"],
  grocery: ["carrots", "pineapple", "tomatoes"],
  drinks: ["pepsi", "coke", "sprite"],
};

// accessing pineapple
console.log("accessing 2nd element of grocery : ", shoppingMall.grocery[1]);

console.log("best hot deal : ", shoppingMall["hot_deals"][2]);

let sonpapdi = prompt("Does sonpapdi get you 🐱????");

if (sonpapdi === "no") {
  console.log("you are correct sonpapdi does not get you 🐱");
} else {
  console.log(`sonpapdi lover be like : https://youtu.be/73URDYP8_vg`);
}
