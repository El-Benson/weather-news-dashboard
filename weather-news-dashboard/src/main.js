import { fetchWeather } from "./weather.js";
import { fetchNews } from "./news.js";

document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
    fetchNews();
});
