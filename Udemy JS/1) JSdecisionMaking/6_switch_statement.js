// ELSE IF vs SWITCH CASE

// else if

const day = parseInt(prompt("Which day of the week do you want to check?"));

if (day === 1) {
  console.log(`Monday`);
} else if (day === 2) {
  console.log(`Tuesday`);
} else if (day === 3) {
  console.log(`Wednesday`);
} else if (day === 4) {
  console.log(`Thursday`);
} else if (day === 5) {
  console.log(`Friday`);
} else if (day === 6) {
  console.log(`Saturday`);
} else if (day === 7) {
  console.log(`Sunday`);
} else {
  console.log(`There are only 7 days in a week enter the right number.`);
}

// This is too messy a better way to do it is using SWITCH CASE

switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tueday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 7:
    console.log(`Sunday`);
    break;
  default:
    console.log("Put a valid week day number.");
}
/* 
here the rest of the cases get printed too because there is no stop to them thats why we use BREAK; to stop the control flow statement
*/
