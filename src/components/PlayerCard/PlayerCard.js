import React from "react";
import Avatar from "../Avatar";

import Card from "../Card";
import "./PlayerCard.css";
const PlayerCard = ({ player }) => {
  return (
    <Card className="player-search-card" bodyClassName="d-flex ">
      <Avatar
        playerId={player.pid}
        playerName={player.name}
        style={{ height: "50px", width: "50px" }}
      />
      <p className="align-self-center ml-1">{player.name}</p>
    </Card>
  );
};
export default PlayerCard;
