
  const apiKey = "987e85ff6e7a48d58fc3cc374ad69f89";
  const url = `https://newsapi.org/v2/everything?q=automobile&language=en&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`;

  async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";

      data.articles.forEach((article, index) => {
        if (index < 6) { // Show only 6 articles
          const card = `
            <div class="col-md-4">
              <div class="card h-100 shadow-sm border-0">
                <img src="${article.urlToImage || "https://placehold.co/400x250"}" 
                     class="card-img-top" alt="News Image">
                <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text text-muted">
                    ${article.description ? article.description.substring(0, 100) + "..." : ""}
                  </p>
                  <a href="${article.url}" target="_blank" class="btn btn-outline-primary btn-sm">Read More</a>
                </div>
                <div class="card-footer bg-white border-0 text-muted small">
                  <i class="bi bi-calendar"></i> ${new Date(article.publishedAt).toDateString()}
                </div>
              </div>
            </div>
          `;
          newsContainer.innerHTML += card;
        }
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  fetchNews();

