const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

/* 
for (let btn of buttons) {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = randomColor();
    btn.style.color = randomColor();
  });
}

const h1 = document.querySelectorAll("h1");
for (let hOne of h1) {
  hOne.addEventListener("click", function () {
    hOne.style.backgroundColor = randomColor();
    hOne.style.color = randomColor();
  });
}
*/

/* This is too much work why not have a single function that way we can apply the randcolour to both buttons and H1. A single function to save time and memory */

// to achive it we use the keyword THIS.
function colourise() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

for (let btn of buttons) {
  btn.addEventListener("click", colourise);
}

const h1 = document.querySelectorAll("h1");
for (let hOne of h1) {
  hOne.addEventListener("click", colourise);
}

// this keyword now represents the button/H1
