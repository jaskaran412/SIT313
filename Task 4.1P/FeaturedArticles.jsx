import React from "react";
import ArticleCard from "./ArticleCard";

function FeaturedArticles({ articles }) {
  return (
    <section className="section">
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map((article) => (
          <ArticleCard key={article.id} item={article} />
        ))}
      </div>
      <button className="see-all">See all articles</button>
    </section>
  );
}

export default FeaturedArticles;
