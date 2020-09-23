import React from "react";

import Card from "../Card";

const NewsCard = ({ imageURL, title, subtitle, link = "" }) => {
  return (
    <Card bodyClassName="d-flex">
      {/* <img className="news-img" src={imageURL} /> */}
      <div style={{background:'red',height:'200px',width:'200px'}}>
    
      </div>
      <div className="news-content">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </Card>
  );
};
export default NewsCard