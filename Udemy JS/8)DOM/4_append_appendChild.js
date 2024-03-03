// Appending newly created elements using createElement

const newImg = document.createElement("img");
newImg.src =
  "https://i.pinimg.com/564x/06/b1/4f/06b14fa1829ec8ae4ea7b9f43e23f2d0.jpg";

// appendChild
newImg.classList.add("square");
document.body.appendChild(newImg);
// appendChild adds the element to the end of the selected parent in this case body.

const newH3 = document.createElement("h3");
newH3.innerText = "Hello I am the new H3";
document.body.appendChild(newH3);

// append
const p = document.querySelector("p");
p.append("I AM NEW TEXTTTTT", "shdfdewqbfejwebfrfajefbahb");

// creating and pre-pending a new Bold
const newB = document.createElement("b");
newB.append("I AM THE NEW BOLD");
p.prepend(newB); // prepend makes the new element appear first/at top.

// appending as a Sibling
/* 
for this we use .insertAdjecentElement(position, element)
*/
const h2 = document.createElement("h2");
h2.innerText = "I am new h2 added as a sibling";
h2.classList.add("border", "purple");

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2); // after end adds the new element after the targetted element ends.
