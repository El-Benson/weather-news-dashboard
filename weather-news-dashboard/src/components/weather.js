import { showLoadingSpinner, updateWeatherUI } from "./ui.js";

const API_KEY = "your_openweathermap_api_key"; 

export async function fetchWeather() {
    showLoadingSpinner("weather");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        document.getElementById("weather").textContent = "Failed to load weather data.";
    }
}
