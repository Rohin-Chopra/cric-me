import React from "react";
import Avatar from "../Avatar";

import Card from "../Card";
const PlayerCard = ({ player }) => {
  return (
    <Card bodyClassName="d-flex ">
      <Avatar playerId={player.pid} />
      <p className="align-self-center ml-1">{player.name}</p>
    </Card>
  );
};
export default PlayerCard;
