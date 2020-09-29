import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerCardsSearchList = (loading, count = 3) => {
  console.log(count, loading);
  const playerCardsSearchArray = [];
  for (let index = 0; index < count; index++) {
    playerCardsSearchArray.push(<PlayerCard />);
  }
  return loading ? playerCardsSearchArray : null;
};

export default PlayerCardsSearchList;
