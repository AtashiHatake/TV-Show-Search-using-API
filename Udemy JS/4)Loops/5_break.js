let input = prompt("Say somenthing...");

while(true) {
    input = prompt(input);
    if(input.toLocaleLowerCase() === "stop copying me") break;
}
console.log('Okay you win...');