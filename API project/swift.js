const searchButton = document.querySelector(".search-button");
const searchBox = document.querySelector(".searchBox");
const showContainer = document.querySelector(".show-container");

const fetchTVSHOWS = async (query) => {
  const data = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const response = await data.json();

  showContainer.innerHTML = ""; // Clear previous results

  response.forEach((show) => {
    const showDiv = document.createElement("div");
    showDiv.classList.add("show");

    const showName = show.show.name ? show.show.name : "Unknown";
    const showCountry = show.show.network && show.show.network.country ? show.show.network.country.name : "Unknown";
    const showGenres = show.show.genres ? show.show.genres.join(", ") : "No genres listed";

    showDiv.innerHTML = `
      <img src="${show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295'}" alt="${showName}">
      <h3>${showName}</h3>
      <p><strong>Country:</strong> ${showCountry}</p>
      <p><strong>Genres:</strong> ${showGenres}</p>
    `;

    showContainer.appendChild(showDiv);
  });
};

searchButton.addEventListener("click", async (evt) => {
  evt.preventDefault(); // Prevents page from refreshing
  const searchInput = searchBox.value.trim(); // Trim removes starting and trailing spaces if any
  await fetchTVSHOWS(searchInput); // Call fetchTVSHOWS with searchInput
});
