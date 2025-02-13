import { fetchWeather } from "../api/weatherAPI.js";

export async function displayWeather() {
    const weatherContainer = document.getElementById("weather");
    const weatherData = await fetchWeather();

    if (weatherData) {
        weatherContainer.innerHTML = `
            <h2>Weather in ${weatherData.name}</h2>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Condition: ${weatherData.weather[0].description}</p>
        `;
    }
}
