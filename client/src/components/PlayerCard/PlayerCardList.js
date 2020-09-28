import React from "react";

import PlayerCard from "./PlayerCard";

const playerCardList = (players) => {
  return players.map((player) => (
    <PlayerCard key={player.id} player={player} />
  ));
};
export default playerCardList;
