import { fetchNews } from "../api/newsAPI.js";

export async function displayNews() {
    const newsContainer = document.getElementById("news");
    const newsArticles = await fetchNews();

    newsContainer.innerHTML = newsArticles.map(article => `
        <article>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </article>
    `).join("");
}
