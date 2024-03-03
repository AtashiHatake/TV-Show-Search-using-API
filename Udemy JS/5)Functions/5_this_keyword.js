const myCat = {
  name: "The Dark Knight",
  colour: "Black",
  breed: "Batman",
  cat() {
    console.log("MEOW MEOW MEOW");
    //console.log(name) this gives error because the function cannot access the other objects.
    console.log(
      `My cat is named ${this.name}, it's colour is ${this.colour} and the breed is ${this.breed}`
    );
  },
};

console.log(myCat.cat());
