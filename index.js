const fetchImage = async (searchedImages) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=32715422-e0410e3c137bf18af69487d41&q=${searchedImages}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const images = await response.json();
  return images;
};
// fetchImage().then((images) => console.log(images));

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", onSubmit);
form.addEventListener("input", onInput);

function onSubmit(evt) {
  evt.preventDefault();
  fetchImage(onInput(evt)).then((images) => {
    console.log(images);
  });
}

function onInput(evt) {
  const { searchQuery } = evt.currentTarget.elements;
  return searchQuery.value;
}
// function createGalleryMarkup(images) {
//   const galleryMarkup = images
//     .map(
//       ({ webformatURL }) =>
//         `<img src="${webformatURL}" alt="${tags}" loading="lazy" />`
//     )
//     .join("");

//   gallery.insertAdjacentHTML("beforeend", galleryMarkup);
// }

// function createGalleryMarkup(images) {
//   const galleryMarkup = images
//     .map(
//       ({ webformatURL, tags, likes, views, comments, downloads }) =>
//         `<div class="photo-card">
//   <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>${likes}</b>
//     </p>
//     <p class="info-item">
//       <b>${views}</b>
//     </p>
//     <p class="info-item">
//       <b>${comments}</b>
//     </p>
//     <p class="info-item">
//       <b>${downloads}</b>
//     </p>
//   </div>
// </div>`
//     )
//     .join("");

//   gallery.insertAdjacentHTML("beforeend", galleryMarkup);
// }
