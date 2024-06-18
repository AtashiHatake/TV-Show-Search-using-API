/*

async code : 
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest

code WITHOUT the above terms is Synchronous code.


use case of ASYNC : sometimes your final code is dependent on other people's servers and you never know when the server will send answer and hum sync code nahi likh sakte, isliye hum async code likhte hai kyuki jab bhi answer aaye tab humara ASYNC code chale.
*/

// callback = function, callback ke jagha humesha function likhna

// setTimeout(callback, time in ms)

console.log("hello");
setTimeout(function () {
  console.log("hello2");
}, 2000);

// hello2 willl run 2 seconds later

/* 

JS is NOT asynchronous

event loop side stack and main stack me communication bitha ta hai (asked in interview)

only when Main Stack is empty only then Side Stack's stuff will be moved to Main Stack
*/

/* 
fetch, axios, promises, setTimeout, setInterval = requests for answer

then, catch, callbacks, async await = uses the answer 
*/

/* 

PROMISES 
promise has three stages : Pending Resolve and Reject pretty self-explanatory

promises can be saved in var or let

if promise is Resolved then is used
if promis is Rejected catch is used

let ans = Promise((res, rej)=> {
    if(true) {
        retuen res();
    }
    else {
        return rej();
    }
})

then and catch syntax

ans
.then(function(){})
.catch(function(){})

*/

// write a Promise for the following : user will ask for a number between 0-9 and if the number is below 5 resolve it, if not then reject it.

let ans = new Promise((res, rej) => {
  let num = Math.floor(Math.random() * 10);

  if (num < 5) {
    return res();
  } else {
    return rej();
  }
});

ans
  .then(function () {
    console.log("RESOLVED below 5");
  })
  .catch(function () {
    console.log("REJECTED above 5");
  });

// Promise is a consturctor function that's why 'new' should be written before it

// ASYNC and AWAIT : when you use async JS you may use Promise and you use "then" and the "then" chaining is very large to make it small we use ASYNC and AWAIT

// to use ASYNC and AWAIT the syntax is : async function name() {}

async function abcd() {
  let rawData = await fetch("https://randomuser.me/api/");
  let answer = await rawData.json();
  console.log(answer);
}

abcd();

// you have to wait for Async code cuz we don't know when we will get the answer. Await = wait on this line till you get the answer.
