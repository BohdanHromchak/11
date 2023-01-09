// Проміс
// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("someting");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

const fetchImage = async (searchedImages) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=32715422-e0410e3c137bf18af69487d41&q=${searchedImages}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const images = await response.json();
  return images;
};
fetchImage().then((images) => console.log(images));
