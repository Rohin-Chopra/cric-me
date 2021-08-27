import React from "react";

import Card from "../Card";
import "./NewsCard";
const NewsCard = ({ urlToImage, title, subtitle, link = "" }) => {
  return (
    <a href={link} className="d-block w-100 news-card-anchor">
      <Card className="mb-2" bodyClassName="d-flex news-card">
        <img
          className="news-img rounded"
          src={urlToImage}
          alt={title}
          style={{ width: "200px", height: "150px" }}
        />
        <div className="news-content ml-3">
          <h4 className="font-weight-bold my-2 news-card-title">{title}</h4>
          <p>{subtitle}</p>
        </div>
      </Card>
    </a>
  );
};
export default NewsCard;
