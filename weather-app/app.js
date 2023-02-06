const API_URL = 'http://api.weatherstack.com/current?access_key=7317c282b7a80b1734099cdc72f582ee&query=Lodz';

const ACCESS_KEY = '7317c282b7a80b1734099cdc72f582ee';

const searchInput = document.querySelector('[data-search]');

const container = document.querySelector('[data-container]');



function getCity(searchQuery) {
    fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${searchQuery}`)
        .then(response => response.json())
        .then(data => container.innerHTML = displayCity(data))
        .catch(error => {
            console.error(error)
            container.innerHTML = displayNothing();
        });

}


function displayNothing() {
    return ``;
}

function displayCity(city) {
    return `<div class="city-header">
        <h2 data-city>${city.request.query}</h2>
        <span data-date>${city.location.localtime}</span>
    </div>
    <div class="city-weather">
        <img src="${city.current.weather_icons}"
            alt="weather">
        <div class="weather">
            <span><span data-temperature>${city.current.temperature}</span>&#176;C</span>
            <span data-weather-description>${city.current.weather_descriptions}</span>
            <div class="weather-details">
                <div class="detail">
                    <span class="fas fa-wind"></span>
                    <span data-wind>${city.current.wind_speed}</span>
                </div>
                <div class="detail">
                    <span class="fas fa-water"></span>
                    <span data-humidity>${city.current.humidity}</span>
                </div>
                <div class="detail">
                    <span class="fas fa-tachometer-alt"></span>
                    <span data-pressure>${city.current.pressure}</span>
                </div>
            </div>
        </div>
    </div>`
}


searchInput.addEventListener('input', () => {
    getCity(searchInput.value);
});
