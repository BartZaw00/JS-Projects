const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const filmsContainer = document.querySelector('[data-films]');

let fullAPIresults = [];

show_Movies();

async function show_Movies() {
    for (let i = 1; i <= 5; i++) {
        await fetch(`${API_URL}api_key=${API_KEY}&page=${i}`)
            .then(response => response.json())
            .then(data => fullAPIresults.push(data))
            .catch(error => console.error(error));
    }

    console.log(fullAPIresults)

    fullAPIresults.forEach((singleAPIresults) => {
        singleAPIresults.results.forEach((result) => {
            filmsContainer.innerHTML += addMovie(result);
        })
    });
}

function addMovie(movie) {
    return `<div class="film">
    <img src="${IMG_PATH+movie.poster_path}" alt="">
    <div class="film-description"><span>${movie.title}</span><span>${movie.vote_average}</span></div> 
    </div>`;
}