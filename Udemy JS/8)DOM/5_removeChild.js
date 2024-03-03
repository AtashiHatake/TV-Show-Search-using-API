// removeChild : we select the parent and then remove the child(the element we want to remove).

/* Removing the first LI of the "Contents" box using removeChild */

const firstLI = document.querySelector("li");
console.log("first li : ", firstLI);

// parent of firstLI
const parentOfLi = firstLI.parentElement;
console.log("parent of firstLI : ", parentOfLi);

parentOfLi.removeChild(firstLI);

// removing first link using removeChild but in one go.
const firstLink = document.querySelector("a");
firstLink.parentElement.removeChild(firstLink);

// Remove : in this we select the element we want to remove and directly remove it. It's like "remove me".

/* Removing first image using remove */
const img = document.querySelector("img");
img.remove();
// done that's how simple it is, it's in some cases better than using remove child.

// this code removes all even placed links
const allLinks = document.querySelectorAll("a");
console.log(allLinks.length);

for (let i = 0; i < allLinks.length; i++) {
  if (i % 2 === 0) {
    allLinks[i].remove();
  }
}

const leftLinks = document.querySelectorAll("a");
console.log(leftLinks.length);
