import React from "react";
import ArticleCard from "./ArticleCard";

function Tutorials({ tutorials }) {
  return (
    <section className="section">
      <h2>Featured Tutorials</h2>
      <div className="card-container">
        {tutorials.map((tutorial) => (
          <ArticleCard key={tutorial.id} item={tutorial} />
        ))}
      </div>
      <button className="see-all">See all tutorials</button>
    </section>
  );
}

export default Tutorials;
