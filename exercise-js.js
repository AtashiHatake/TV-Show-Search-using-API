function capitalize(str) {
  let firstLetter = str.slice(0, 1);
  let otherLetters = str.slice(1);
  let newStr = firstLetter.toUpperCase().concat(otherLetters);
  return newStr;
}

capitalize("hello");

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function FizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num.toString();
  }
}
