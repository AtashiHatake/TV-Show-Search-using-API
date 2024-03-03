// setTimeout() : this sets a time till a function runs for one time.
console.log("hi????");
setTimeout(() => {
  console.log("still here.....???");
}, 3000);
console.log("byeeee...");

// first argument is function can be any type of function
// the number (here 3000) is time (here 3 sec)

// setInterval() : this sets a time till a function returns again and again

const id = setInterval(() => {
  console.log(
    `This will repeat and repeat....every 4 seconds : ${Math.random()}`
  );
}, 4000);

// clearInterval(id) : This stops the setInterval from running.
