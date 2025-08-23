import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedArticles from "./components/FeaturedArticles";
import Tutorials from "./components/Tutorials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { faker } from "@faker-js/faker";

function App() {
  const [articles, setArticles] = useState([]);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Static Articles + Faker Images
// Articles with ratings
const staticArticles = [
  {
    id: 1,
    title: "React OR Vue?",
    author: "Alice Johnson",
    excerpt: "An in-depth comparison between React and Vue.js.",
    rating: "4.9",
  },
  {
    id: 2,
    title: "NodeJS Mastery",
    author: "Bob Smith",
    excerpt: "Mastering Node.js for scalable applications.",
    rating: "4.7",
  },
  {
    id: 3,
    title: "React Hooks",
    author: "Charlie Brown",
    excerpt: "Simplifying state management with React Hooks.",
    rating: "4.8",
  },

].map((article) => ({
  ...article,
  image: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
}));

// Tutorials with ratings
const staticTutorials = [
  {
    id: 1,
    title: "JS Basics",
    author: "Emily Johnson",
    excerpt: "Learn the fundamentals of JavaScript.",
    rating: "5.0",
  },
  {
    id: 2,
    title: "React Router",
    author: "David Wilson",
    excerpt: "Master navigation in React using React Router.",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Express.js Crash Course",
    author: "Sophia White",
    excerpt: "Build APIs with Express.js from scratch.",
    rating: "4.7",
  },
].map((tutorial) => ({
  ...tutorial,
  image: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
}));


    setArticles(staticArticles);
    setTutorials(staticTutorials);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <FeaturedArticles articles={articles} />
      <Tutorials tutorials={tutorials} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
