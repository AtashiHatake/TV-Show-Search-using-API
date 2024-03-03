// Difference betweeen textContent, innerText, innerHTML
console.log(document.querySelector("p").textContent);
console.log(document.querySelector("p").innerText);
console.log(document.querySelector("p").innerHTML);

// Attributes and Attribute Selectors
console.log(document.querySelector("a").href);
console.log(document.querySelector("a").title);

const firstLink = document.querySelector("a");

console.log(firstLink.href, "firstLink.href");
console.log(firstLink.getAttribute("href"), "firstLink with attribute");

// setting a new attribute to the first Anchor tag.
console.log(
  "setting a new attribute : ",
  firstLink.setAttribute("href", "http://www.google.com")
);


