/*

fetch("https://narutodb.xyz/api/character/1")
  .then((res) => {
    console.log("resolved", res);
    res.json().then((data) => {
      console.log("json done 1", data);
    });
    return fetch("https://narutodb.xyz/api/character/2");
  })
  .then((res) => {
    console.log("resolved", res);
    res.json().then((data) => console.log("json done 2", data));
    return fetch("https://narutodb.xyz/api/character/3");
  })
  .then((res) => {
    console.log("resolved", res);
    res.json().then((data) => {
      console.log("json done 3", data);
    });
    return fetch("https://narutodb.xyz/api/character/4");
  })
  .then((res) => {
    console.log("resolved", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

*/

/*
 what happens here??
1) fetch returns a promise
2) it sends a request to the url
3) then the promise is either resolved or rejected, if rersolved .then runs if rejected .catch runs
4) .then : it has the JSON parse to get the data in the form of JSON
*/

// the above can easily be done with Async function

const loadNarutoChars = async () => {
  try {
    const response = await fetch("https://narutodb.xyz/api/character/366");
    const data = await response.json();
    console.log("DONE WITH ASYNC FUNCTION", data);

    const response2 = await fetch("https://narutodb.xyz/api/character/367");
    const data2 = await response2.json();
    console.log("DONE WITH ASYNC FUNCTION", data2);

    const response3 = await fetch("https://narutodb.xyz/api/character/368");
    const data3 = await response3.json();
    console.log("DONE WITH ASYNC FUNCTION", data3);

    const response4 = await fetch("https://narutodb.xyz/api/character/369");
    const data4 = await response4.json();
    console.log("DONE WITH ASYNC FUNCTION", data4);
  } catch (error) {
    console.log("error!", error);
  }
};

loadNarutoChars();

// making a async function is so much cleaner and easier.
// DO NOT FORGET TO USE TRY CATCH to catch errors if any
