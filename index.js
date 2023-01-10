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
    gallery.innerHTML = "";
    if (images.hits.length === 0) {
      alert(
        "Sorry, there are no images matching your search query. Please try again."
      );
    } else {
      createGalleryMarkup(images.hits);
    }
  });
}

function onInput(evt) {
  const { searchQuery } = evt.currentTarget.elements;
  return searchQuery.value;
}

function createGalleryMarkup(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
  <img src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" loading="lazy"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
}
