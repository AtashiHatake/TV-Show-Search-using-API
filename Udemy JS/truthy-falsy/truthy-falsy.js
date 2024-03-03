let inp = prompt("enter a string ot leave ot blank to see truthy or falsy.");

if (inp) {
  console.log("truthy");
} else {
  console.log("falsy");
}
/* If this has any string its true and no string is blank string which is false in nature. */

if (0) {
    console.log("0 is truthy");
  } else {
    console.log("0 is falsy");
  }

/*only 0 is false by nature as we can see below -1617 is true even if it is negative.*/  

  if (-1617) {
    console.log("-1617 is truthy");
  } else {
    console.log("-1617 is falsy");
  }

if (null) {
    console.log("null is truthy");
  } else {
    console.log("null is falsy");
  }
if (undefined) {
    console.log("Undefined is truthy");
  } else {
    console.log("Undefined is falsy");
  }
if (NaN) {
    console.log(" NaN is truthy");
  } else {
    console.log("NaN is falsy");
  }