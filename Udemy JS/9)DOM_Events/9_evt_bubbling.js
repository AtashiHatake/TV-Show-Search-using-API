const para = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", function (evt) {
  btn.style.backgroundColor = makeRandColor();
  evt.stopPropagation();
});

para.addEventListener("click", function () {
  alert("para clicked!!");
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
