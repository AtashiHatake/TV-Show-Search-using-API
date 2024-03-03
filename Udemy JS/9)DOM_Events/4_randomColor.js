const btn = document.querySelector("#btn1");
btn.addEventListener("click", function () {
  const newColor = randColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector("h2").innerText = newColor;
});

const randColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const add = r + g + b;
  if (add < 160) {
    document.querySelector("h2").style.color = "white";
  } else {
    document.querySelector("h2").style.color = "black";
  }
  return `rgb(${r}, ${g}, ${b})`;
};
