// const weatherForm = document.getElementById('weatherForm');
const apiKey = "0eb5d5d0b6722c6268094c8ff160c359";


function getWeatherData(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
            return data; // Return the data to use in the next .then() block
        })
        .catch((error) => {
            console.log('Error fetching weather data:', error);
        });
}

function submitEvent(e) {
    e.preventDefault();
    const input = document.getElementById('input')
    const cityName = input.value;



    const weatherImage = document.getElementById('weatherImage');
const temperature = document.getElementById('temperature');
const city = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('windSpeed');
const weatherCondition = document.getElementById('weather-condition')[0];

    // console.log(cityName)

    getWeatherData(cityName)
        .then((data) => {
            console.log(data);

            // Update DOM elements with weather data
            temperature.innerText = `${data.main.temp}° C`;
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
            wind.innerText = `Wind speed: ${data.wind.speed} m/s`;
            city.innerText = data.name;
            weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            // weatherCondition.innerText = `Weathre: ${data.weather[0].description}`;
        })
}


