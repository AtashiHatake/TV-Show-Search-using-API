/*
axios
  .get("https://narutodb.xyz/api/character/1")
  .then((res) => {
    console.log("response : ", res);
  })
  .catch((err) => {
    console.log("error!", err);
  });
*/

// the above using async function

const loadNarutoChar = async (id) => {
  try {
    const response = await axios.get(
      `https://narutodb.xyz/api/character/${id}`
    );
    console.log(`data of character ${id} : `, response.data);
  } catch (err) {
    console.log("error! : ", err);
  }
};

for (let i = 0; i <= 5; i++) {
  loadNarutoChar(i);
}

const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#jkBtn");

const addNewJoke = async () => {
  const dadJoke = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(dadJoke);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (err) {
    return "no jokes for you! JUST KIDDING THE SERVICE ISN'T AVAILABLE FOR THE MOMENT :(";
  }
};

btn.addEventListener("click", addNewJoke);
