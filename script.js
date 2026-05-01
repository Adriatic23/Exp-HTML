async function getQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();

        document.getElementById("quote").innerText = `"${data[0].q}"`;
        document.getElementById("author").innerText = `- ${data[0].a}`;
    } catch (error) {
        document.getElementById("quote").innerText = "Stay motivated. Keep growing 🚀";
        document.getElementById("author").innerText = "";
    }
}

getQuote();
// FETCH BUSINESS NEWS (GNews API)
async function getNews() {
    const apiKey = "39e0006986681c49e4eb542ff2a956e1";

    try {
        const response = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=6&apikey=${apiKey}`
        );

        const data = await response.json();

        const container = document.getElementById("news-container");
        container.innerHTML = ""; // clear

        data.articles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-card");

            newsItem.innerHTML = `
                <img src="${article.image || ''}" />
                <h3>${article.title}</h3>
                <p>${article.description || ''}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            `;

            container.appendChild(newsItem);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

