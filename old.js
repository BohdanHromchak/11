// const form = document.querySelector("#search-form");
// const gallery = document.querySelector(".gallery");
// const input = document.querySelector('[name="searchQuery"]');
// const loadMoreBtn = document.querySelector(".load-more");

// form.addEventListener("submit", onSubmit);
// form.addEventListener("input", onInput);
// loadMoreBtn.addEventListener("click", onLoadMore);

// let page = 1;
// // let limit = 5;
// // const totalPages = 100 / limit;

// /*
// fetching images
//  */
// const fetchImage = async (searchedImages, page) => {
//   const response = await fetch(
//     `https://pixabay.com/api/?key=32715422-e0410e3c137bf18af69487d41&q=${searchedImages}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//   );
//   const images = await response.json();
//   return images;
// };

// /*
// search button
//  */
// function onSubmit(evt) {
//   evt.preventDefault();
//   fetchImage(onInput(evt)).then((images) => {
//     // console.log(images);
//     gallery.innerHTML = "";
//     if (images.hits.length === 0 || !input.value) {
//       alert(
//         "Sorry, there are no images matching your search query. Please try again."
//       );
//     } else {
//       createGalleryMarkup(images.hits);
//     }
//   });
// }
// /*
// load more button
//  */
// function onLoadMore(evt) {
//   evt.preventDefault();
//   fetchImage(input.value).then((images) => {
//     console.log(images);
//     gallery.innerHTML = "";
//     if (images.hits.length === 0 || !input.value) {
//       alert(
//         "Sorry, there are no images matching your search query. Please try again."
//       );
//     } else {
//       createGalleryMarkup(images.hits);
//     }
//   });
// }

// function onInput(evt) {
//   const { searchQuery } = evt.currentTarget.elements;
//   return searchQuery.value;
// }

// /*
// create gallery markup
//  */
// function createGalleryMarkup(images) {
//   const galleryMarkup = images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) =>
//         `<div class="photo-card">
//   <img src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" loading="lazy"/>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>${likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>${views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>${downloads}
//     </p>
//   </div>
// </div>`
//     )
//     .join("");

//   gallery.insertAdjacentHTML("beforeend", galleryMarkup);
// }
