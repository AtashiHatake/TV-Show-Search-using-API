// declaring async function

async function hello() {
  throw "dkfajnfjkanf PROBLEM";
  return "Hiiiiiiiiiiiiiiiii";
}
//this return resolves the promise
/*
hello()
  .then((data) => {
    console.log("promise resolved with data :", data);
  })
  .catch((err) => {
    console.log("promise rejected");
    console.log(err);
  });
*/

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials";
  if (password === "khitam") return "WELCOME!";
  throw "invalid password";
};

login("atharva", "khitam")
  .then((message) => {
    console.log("logged in");
    console.log(message);
  })
  .catch((err) => {
    console.log("login failed");
    console.log(err);
  });

login("atharva", "sjdfa")
  .then((message) => {
    console.log("logged in");
    console.log(message);
  })
  .catch((err) => {
    console.log("login failed");
    console.log(err);
  });

login("")
  .then((message) => {
    console.log("logged in");
    console.log(message);
  })
  .catch((err) => {
    console.log("login failed");
    console.log(err);
  });
