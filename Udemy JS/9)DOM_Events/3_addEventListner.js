const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  alert("clicked");
});

const scream = () => {
  console.log("AHHHHHHHHHHHH");
  console.log("STOP TOUCHING ME!!!!!!!!1");
};
btn1.addEventListener("click", scream);

/* 
Syntax : element.addEventListner(method, function)
*/

// using addEventListner we can have two or more call backs which does not work for onclick.

const btn2 = document.createElement("button");
btn2.innerText = "I am second button.";
document.body.appendChild(btn2);

const twist = () => {
  console.log("twist");
};
const shout = () => {
  console.log("shout");
};

btn2.addEventListener("click", twist, { once: true });
btn2.addEventListener("click", shout);
// the once just kills the event so it only runs one time.

