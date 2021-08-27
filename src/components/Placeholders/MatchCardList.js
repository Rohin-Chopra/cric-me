import React from "react";

import PlaceholderMatchCard from "./MatchCard";

const PlaceholderMatchCardList = ({ loading, count = 1 }) => {
  const placeholderMatchCards = [];
  for (let index = 0; index < count; index++) {
    placeholderMatchCards.push(<PlaceholderMatchCard />);
  }
  return loading ? placeholderMatchCards : null;
};
export default PlaceholderMatchCardList;
