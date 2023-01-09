const fetchImage = async (searchedImages) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=32715422-e0410e3c137bf18af69487d41&q=${searchedImages}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const images = await response.json();
  return images;
};
// fetchImage().then((images) => console.log(images));

const form = document.querySelector("#search-form");
form.addEventListener("submit", onSubmit);
form.addEventListener("input", onInput);

function onSubmit(evt) {
  evt.preventDefault();
  fetchImage("cat").then((images) => {
    console.log(images);
  });
}

function onInput(evt) {
  const { searchQuery } = evt.currentTarget.elements;
  console.log(searchQuery.value);
}

// function createImageMarkup() {}
