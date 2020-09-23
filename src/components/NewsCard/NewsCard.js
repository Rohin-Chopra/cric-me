import React from "react";

import Card from "../Card";

const NewsCard = ({ imgURL, title, subtitle, link = "" }) => {
  return (
    <Card bodyClassName="d-flex justify-content-around">
      <img className="news-img rounded" src={imgURL}  style={{width:'200px',height:'150px'}}/>
      <div className="news-content ml-3">
        <h4 className="font-weight-strong">{title}</h4>
        <p>{subtitle}</p>
      </div>
    </Card>
  );
};
export default NewsCard;
