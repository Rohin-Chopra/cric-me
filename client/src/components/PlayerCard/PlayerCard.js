import React from "react";

import Card from "../Card";
const PlayerCard = ({ player }) => {
  return (
    <Card>
      <p>{player.name}</p>
    </Card>
  );
};
export default PlayerCard;
