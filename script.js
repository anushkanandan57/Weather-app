
const apiKey = 'c8cff112d7dc088b931c24b4b899d028'; 
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.innerHTML = 'Please enter a city name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            weatherResult.innerHTML = 'City not found. Please try again.';
            return;
        }

        const weatherHtml = `
            <h2>Weather in ${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        weatherResult.innerHTML = weatherHtml;
    } catch (error) {
        weatherResult.innerHTML = 'Error fetching weather data. Please try again later.';
    }
}
