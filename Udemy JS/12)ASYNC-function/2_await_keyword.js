// using AWAIT in async function

const timedColourChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// using AWAIT in async function
async function rainbow() {
  await timedColourChange("red", 1000);
  await timedColourChange("orange", 1000);
  await timedColourChange("yellow", 1000);
  await timedColourChange("green", 1000);
  await timedColourChange("blue", 1000);
  await timedColourChange("indigo", 1000);
  await timedColourChange("violet", 1000);
}

rainbow();

// as you see the await keyword stops the execution of other colours till the predecessor colour promise is fullfilled
