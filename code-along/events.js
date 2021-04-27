// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a reference to the "click-me" button
let clickMeButton = document.querySelector(`.click-me`)

// Create an event listener
clickMeButton.addEventListener(`click`, async function(event) {
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
  let movieList = document.querySelector(`.movies-to-watch`)
})

let addMovieLink = document.querySelector(`.add-movie`)

// Create an event listener
addMovieLink.addEventListener(`click`, async function(event) {
  // Prevent the link's default behavior (aka go to Google)
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)

})

let zoomImageButton = document.querySelector(`.zoom-image`)

// Create an event listener for the clickMeButton
zoomImageButton.addEventListener(`click`, async function(event) {
  let image = document.querySelector(`img`)
  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)

})

let changeImageButton = document.querySelector(`.change-image`)

// Create an event listener
changeImageButton.addEventListener(`click`, async function(event) {
  let image = document.querySelector(`img`)
  image.setAttribute(`src`,`../images/grogu2.jpg`)
})

let sayHiButton = document.querySelector(`.say-hi`)

sayHiButton.addEventListener(`click`, async function(event) {
  event.preventDefault()
  console.log(`the form was submitted`)
  // Get a reference from the first name input field
  let nameInput = document.querySelector(`#first-name`
  )
  // Get the value from the input field
  let firstName = nameInput.value

  // Get a  reference to the "greet" element
  let greetElement = document.querySelector(`.greet`)

  // First name should have value
  if (firstName.length >0) {
    
    // Create a sentence to put in the "greet" element
    let sentence = `Hi, ${firstName}!`
    
    //Set the "greet element's HTML to the sentence"
    greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
})