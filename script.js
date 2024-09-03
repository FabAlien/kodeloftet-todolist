function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

// console.log("Starting Javascript")

// while(true) {
//   console.log("New Turn")
//   await waitFor()
// }

// console.log("Done")

// async function waitFor() {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve()}, 3000)
//   })
// }

const apiUrl = "https://ghibliapi.vercel.app/films"

const response = await fetch(apiUrl)
const data = await response.json()

const movieListElement = document.querySelector("#filmList")
console.log(movieListElement)

for (const movie of data) {
  console.log(movie)

  const movieCard = document.createElement("Li")
  movieCard.textContent = movie.title

  movieListElement.append(movieCard)
}

console.log(data)