// creating promises
/* the promise asks for 2 parameters one is resolve and reject can be named anything.
resolve and reject are functions which are meant to be executed inside a promise.
*/

/*
new Promise((resolve, reject) => {
  resolve();
  reject();
});
*/

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const randomNo = Math.random();
    setTimeout(() => {
      if (randomNo < 0.7) {
        resolve("Fake data is here");
      }
      reject("Request error");
    }, 1000);
  });
};

fakeRequest("/hello")
  .then((data) => {
    console.log("done with request");
    console.log("data is :", data);
  })
  .catch((err) => {
    console.log("oh no", err);
  });

// colour change using promise
const timedColourChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// you need to use RETURN to chain promises
timedColourChange("red", 1000)
  .then(() => timedColourChange("orange", 1000))
  .then(() => timedColourChange("blue", 1000))
  .then(() => timedColourChange("yellow", 1000))
  .then(() => timedColourChange("aqua", 1000))
  .then(() => timedColourChange("brown", 1000))
  .then(() => timedColourChange("green", 1000));
