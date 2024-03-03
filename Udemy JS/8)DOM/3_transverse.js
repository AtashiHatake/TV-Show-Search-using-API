// Transversing Parent/Child/Sibling

/* 
every element has only ONE direct parent.
every element has multiple CHILDREN.
*/

const image = document.querySelectorAll(".square");
image[1].src =
  "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQtJ5pqwpbju4hJ3W3QiSjw5xypcBQgR7YlhBJaGCEXUVSXX6mEhbMgORDqrKzmdgv4RIOCxUFdlj7Rtqs";

// parentElement
const firstBold = document.querySelector("b");
console.log(firstBold);
console.log("Parent of first bold : ", firstBold.parentElement);

console.log(
  "Grand-parent of first bold : ",
  firstBold.parentElement.parentElement
);

console.log(
  "great-grand-parent of first bold : ",
  firstBold.parentElement.parentElement.parentElement
);

// children : this give HTML collection of children
// childElementCount : gives the number of children present.
const para = firstBold.parentElement;
console.log("Children of paragraph : ", para.children);
console.log("Number of children of paragraph : ", para.childElementCount);

// you can iterate over the .children

// SIBLINGS
/* 
Always use nextElementSibling or previousElementSibling instead of nextSibling/previousSibling because nextSibling/previousSibling returns a Node text which is a blank text.
*/

const squareImg = document.querySelector(".square");
console.log("nextSibling", squareImg.nextSibling);
console.log("previousSibling", squareImg.previousSibling);

console.log("nextElementSibling : ", squareImg.nextElementSibling); // gives second image
console.log("previousElementSibling : ", squareImg.previousElementSibling); // gives the above paragraph

