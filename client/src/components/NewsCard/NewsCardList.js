import React from "react";
import NewsCard from "./NewsCard";

const newsCardList = (articles) => {
  return articles.map((article) => {
    return (
      <NewsCard
        imgURL={article.image}
        title={article.title}
        subtitle={article.description}
        link={article.url}
        key={article.description + article.name}
      />
    );
  });
};

export default newsCardList;