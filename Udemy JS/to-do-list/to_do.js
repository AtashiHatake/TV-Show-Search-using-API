let input = prompt("What do you wish to do?");
const toDo = ["collect eggs"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************************");
    for (let i = 0; i < toDo.length; i++) {
      console.log(`${i}: ${toDo[i]}`);
    }
    console.log("************************");
  } else if (input === "new") {
    const up = prompt("enter your new to-do : ");
    toDo.push(up);
    console.log(`${up} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(
      prompt("enter the index of what you want to delete :")
    );
    if (!Number.isNaN(index)) {
      const deleted = toDo.splice(index, 1);
      console.log(`okay deleted ${deleted}`);
    } else {
      console.log("Unknown index, please enter a valid one.");
    }
  }
  input = prompt("What do you wish to do?");
}
console.log("Okay, quitting");
