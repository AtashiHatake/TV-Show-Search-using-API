const form = document.querySelector("form");
const catName = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newLI = document.createElement("li");
  newLI.innerText = catName.value;
  list.appendChild(newLI);
  catName.value = "";
});

/* 
the  evt.preventDefault(); stops the page from refreshing to the ACTION page that way we can get the data out from the form input and do some basic logic and update the view.
*/
