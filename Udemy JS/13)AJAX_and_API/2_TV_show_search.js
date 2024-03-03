const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (evt) {
  evt.preventDefault();
  const userSearch = form.elements.query.value;
  const config = { params: { q: userSearch } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );

  clearImage(); //cleares existing images
  imageDisplay(response.data);
  form.elements.query.value = "";
});

const clearImage = () => {
  const existingImages = document.querySelectorAll("img");
  existingImages.forEach((img) => img.remove());
};

const imageDisplay = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const newImg = document.createElement("img");
      newImg.src = result.show.image.medium;
      document.body.append(newImg);
    }
  }
};
