const fetchImage = async (searchedImages) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=32715422-e0410e3c137bf18af69487d41&q=${searchedImages}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const images = await response.json();
  return images;
};
// fetchImage().then((images) => console.log(images));

// const input = document.querySelector('[name="searchQuery"]');
// const submitBtn = document.querySelector("button");
// input.addEventListener("input", onInput);
// submitBtn.addEventListener("submit", () => {
//   console.log("ok");
// });

// function onInput() {
//   const searchedImages = input.value;
// }
// function onSubmit() {
//   console.log("ok");
// }
// function createImageMarkup() {}

const form = document.querySelector("#search-form");

form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
}

form.addEventListener("input", onInput);
function onInput(evt) {
  const { searchQuery } = evt.currentTarget.elements;
  console.log(searchQuery.value);
}
