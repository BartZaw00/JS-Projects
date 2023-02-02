const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const filmsContainer = document.querySelector('[data-films]');
const searchField = document.querySelector('[data-search]');

let fullAPIresults = [];

getMovies();

async function getMovies() {
    for (let i = 1; i <= 5; i++) {
        await fetch(`${API_URL}api_key=${API_KEY}&page=${i}`)
            .then(response => response.json())
            .then(data => fullAPIresults.push(data))
            .catch(error => console.error(error));
    }

    console.log(fullAPIresults)

    displayMovies(fullAPIresults);
}

function displayMovies(items) {
    items.forEach((item) => {
        item.results.forEach((result) => {
            filmsContainer.innerHTML += addMovie(result);
        })
    });
}

function displayFilteredMovies(items) {
    items.forEach((result) => {
        filmsContainer.innerHTML += addMovie(result);
    })
}

function addMovie(movie) {
    let movieReviews = "good";
    let movieFontSize = "big"
    if (movie.vote_average < 7.5)
        movieReviews = "medium";
    if (movie.vote_average < 5)
        movieReviews = "bad";
    if (movie.title.length > 21)
        movieFontSize = "medium";
    if (movie.title.length > 50)
        movieFontSize = "small";


    return `<div class="film">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    <div class="film-description"><span class="font-size-${movieFontSize}">${movie.title}</span><span class=" vote vote-average-${movieReviews}">${movie.vote_average}</span></div> 
    </div>`;
}

searchField.addEventListener('input', () => {
    let searchQuery = searchField.value.toUpperCase();
    let searchResults = fullAPIresults.reduce((acc, element) => {
        return acc.concat(element.results.filter(result => result.title.toUpperCase().includes(searchQuery)));
    }, []);

    console.log(fullAPIresults)
    console.log(searchResults)
    filmsContainer.innerHTML = '';
    displayFilteredMovies(searchResults);
})
