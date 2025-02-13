const WEATHER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city = "New York") {
    try {
        const response = await fetch(`${WEATHER_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
