/*
REST : let's say we don't know how many arguments we will have but we need them to be used in a function, hence we use REST. It's like this :
Cherry wins gold
Atharva wins silver
REST of the people are : Suraj, Nitin, Nilesh......etc.
*/

function add(num1, num2, ...otherNums) {
  console.log(num1 + num2 + otherNums.reduce((tot, el) => tot + el));
}

add(1, 2, 3, 4, 4);

const winners = (gold, silver, ...participants) => {
  console.log("Gold medal goes to : ", gold);
  console.log("Silver medal goes to : ", silver);
  console.log("Thank you participants : ", participants);
};

winners("Cherry", "Atharva", "Suraj", "Nitin", "Nishit", "Satvil", "Parkhe");
/* 
Here we know the Gold and Silver medalist but we don't know how many participants we have so we use rest. 
*/
