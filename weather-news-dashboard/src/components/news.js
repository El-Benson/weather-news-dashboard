import { showLoadingSpinner, updateNewsUI } from "./ui.js";

const API_KEY = "your_newsapi_api_key"; 

export async function fetchNews() {
    showLoadingSpinner("news");

    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        updateNewsUI(data.articles);
    } catch (error) {
        document.getElementById("news").textContent = "Failed to load news.";
    }
}
