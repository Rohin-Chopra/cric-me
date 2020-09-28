import React from "react";

import PlaceholderNewsCard from "./NewsCard";
import "./Placeholder.css";

const PlaceholderNewsCardList = ({ loading, count = 1 }) => {
  const placeholderMatchCards = [];
  for (let index = 0; index < count; index++) {
    placeholderMatchCards.push(<PlaceholderNewsCard />);
  }
  return loading ? placeholderMatchCards : null;
};
export default PlaceholderNewsCardList;
