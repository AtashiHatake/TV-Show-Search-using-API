// concat() : merges two arrays
let abc = ["a", "b", "c"];
let def = ["d", "e", "f"];

let abcdef = abc.concat(def);
/*
In concat the array in the bracket is merged with the first array.
*/
console.log("not merged array abc :", abc);
console.log("not merged array def :", def);
console.log("Merged array : ", abcdef);

// includes() : this determines weather an array has the given values by returning TRUE or FALSE.
let cats = ["Persian", "Stray", "Egyptian", "Munchkin"];

let dollface = cats.includes("dollface");
let persian = cats.includes("Persian");
console.log("does the array include Dollface cats? : ", dollface);
console.log("does the array include Persian cats? : ", persian);

// indexOf() : gives index of elements of an array. CASE SENSITIVE
console.log("Index of Munchkin is : ", cats.indexOf("Munchkin"));
console.log(
  "Index of kitty is -1 because it does not exist in the array : ",
  cats.indexOf("kitty")
);

// reverse() : this reverses the array due to which last element becomes first and first becomes last. This changes the array FOREVER hence called destructive method.

console.log("before reverse : ", cats);
let reverse_array = cats.reverse();
console.log("after reverse of cats array is : ", cats);

/* slice() : it gives a slice of an array a small part. eg : first 5 elements of an array 10 elements long.

slice INCLUDES the start index and does NOT include the second index argument.

also it is optional to give either or both the start and end points. */
let colours = ["red", "orange", "yellow", "blue", "violet", "indigo"];

let coolColours = colours.slice(3);
console.log("orignal array : ", colours);
console.log("cool colours : ", coolColours);
let warmColours = colours.slice(0, 3);
console.log("warm colours : ", warmColours);

/*
splice() : this adds/removes using an index as a starting point then asks for things to delete and then asks for things to be added.
*/

let months = ["jan", "feb", "mar", "apr", "may"];
// removing things (removing mar)
let mar_remove = months.splice(2, 1); // this removes mar, 2 gives the index of march and 1 specifies the number of things to be removed
console.log("march removed using (2,1)", months);

// adding march back
let mar_add = months.splice(2, 0, "mar");
console.log("march added back : ", months);
// 2 gives the position where march is added, 0 gives no deletion of any item.

// adding and deleting
let feburaryAddDelFeb = months.splice(1, 1, "feburary");
console.log("removing feb adding feburary : ", months);

// sort() : this converts the array elements to string then compares to UTF-16 code units and then forms a ascending array.

let ascending = [1, 20, 678, 3820, 87965, 1000000];

console.log(
  "weird sorting of sort() : ",
  ascending.sort(),
  " to make it ascending or descending sorting we can code it diffrently we will learn this later."
);
