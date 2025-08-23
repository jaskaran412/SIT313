import React from "react";

function ArticleCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>
      <p>⭐{item.rating} <strong>{item.author}</strong></p>
    </div>
  );
}

export default ArticleCard;
