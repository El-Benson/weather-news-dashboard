const NEWS_API_KEY = "YOUR_NEWSAPI_KEY";
const NEWS_URL = "https://newsapi.org/v2/top-headlines?country=us";

export async function fetchNews() {
    try {
        const response = await fetch(`${NEWS_URL}&apiKey=${NEWS_API_KEY}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching news data:", error);
    }
}
