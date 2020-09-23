import React from "react";

import Card from "../Card";

const NewsCard = ({ imgURL, title, subtitle, link = "" }) => {
  return (
    <a href={link} className="d-block w-100">
      <Card className="mb-2" bodyClassName="d-flex news-card">
        <img
          className="news-img rounded"
          src={imgURL}
          alt={title}
          style={{ width: "200px", height: "150px" }}
        />
        <div className="news-content ml-3">
          <a href={link} className="">
            <h4 className="font-weight-bold my-2">{title}</h4>
          </a>
          <p>{subtitle}</p>
        </div>
      </Card>
    </a>
  );
};
export default NewsCard;
