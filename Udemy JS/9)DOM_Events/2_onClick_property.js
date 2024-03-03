const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("you clicked me...");
  console.log("I hope it works!!");
};

const scream = () => {
  console.log("AHHHHHHHHHHHHHHHHHHHHHHHH");
  console.log(`DON'T TOUCH ME`);
};

btn.onmouseenter = scream;
// as you can see we don't activate/call the function we just give the button the function.
