const input = document.querySelector("input");

// Change event : whenever you type a new thing and click away the event fires.

input.addEventListener("change", function () {
  console.log("Change Event fired");
});

// Input event : whenever value is changed in the input box this fires the event. Even when you copy paste into input box it fires.
input.addEventListener("input", function () {
  console.log("Input event fired");
});
