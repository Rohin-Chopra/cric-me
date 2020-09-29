import React from "react";

import Card, { CardHeader } from "../Card";
import "./Placeholder.css";

const PlaceholderPlayerCard = () => {
  return (
    <Card>
      <div class="ui placeholder " style={{ maxWidth: "100%" }}>
        <div class="short line"></div>
        <div class="short line"></div>
        <div class="short line"></div>
        <div class="short line"></div>
      </div>
    </Card>
  );
};

export default PlaceholderPlayerCard;
