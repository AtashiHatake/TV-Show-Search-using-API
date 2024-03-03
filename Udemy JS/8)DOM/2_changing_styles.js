// Creating CSS classes to apply styling using DOM

const h2 = document.querySelector("h2");
h2.getAttribute("class"); // this is to check if it has any classes already.

// h2.setAttribute("class", "purple"); // this applies the class PURPLE from CSS doc.
// h2.setAttribute("class", "border"); // this applies the BORDER class from CSS doc BUT it removes the other classes.

// to stack the both classes, we do this :

let currentClasses = h2.getAttribute("class");
// h2.setAttribute("class", `${currentClasses} purple`);
// we use template literal and seperate the classes using a SPACE.

// to tackle this issue we use classList
h2.classList.add("purple", "border", "font");
// this way we can add multiple classes unlike setAttribute

// to remove classes
h2.classList.remove("font");

// to check if a class is activated on an element
console.log(h2.classList.contains("border")); // returns true
console.log(h2.classList.contains("font")); // returns false

// how to toggle a class
h2.classList.toggle("font");
h2.classList.toggle("border");
h2.classList.toggle("border");
// this is basically an ON OFF switch each time you call it it either applies or stops the applying
