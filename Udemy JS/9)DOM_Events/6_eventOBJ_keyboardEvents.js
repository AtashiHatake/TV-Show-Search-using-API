const btn = document.querySelector("button");

btn.addEventListener("click", function (evt) {
  console.log(evt);
});
// evt : short form for event, and it is basically a parameter which stores what happened in the event in the form of an object.
// this consists the information of the Event

/* We need Event Objects for keyboard events because we frequently need to know what key was pressed.  */

// Keyboard Events with Event Object
// check the console you will find an Object with which key was pressed
const inputEvt = document.querySelector("input");
inputEvt.addEventListener("keydown", function (evt) {
  console.log("key : ", evt.key);
  console.log("code : ", evt.code);
});
// to access certain values we use object methods to get them.

/*
inputEvt.addEventListener("keyup", function () {
  console.log("keyup");
});
*/

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP");
  }
});

// This code allows you filter out which keys have been pressed
// this can be donw with if....else statement too!!