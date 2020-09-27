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
      />
    );
  });
};

export default newsCardList;