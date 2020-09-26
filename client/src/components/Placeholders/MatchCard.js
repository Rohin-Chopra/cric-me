import React from "react";

import Card, { CardHeader } from "../Card";
import "./MatchCard.css";
const PlaceholderMatchCard = () => {
  return (
    <>
      <Card>
        <div class="ui placeholder " style={{ maxWidth: "100%" }}>
          <div class="short line"></div>
          <div class="short line"></div>
          <div class="short line"></div>
          <div class="short line"></div>
        </div>
      </Card>
      <CardHeader>
        <div class="ui placeholder " style={{ maxWidth: "15%" }}>
          <div class="full line"></div>
        </div>
      </CardHeader>
    </>
  );
};

export default PlaceholderMatchCard;
