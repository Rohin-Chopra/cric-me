import React from "react";

import Card from "../Card";
import "./MatchCard.css";
const PlaceholderNewsCard = () => {
  return (
    <>
      <Card>
        <div class="ui placeholder">
          <div class="image header">
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PlaceholderNewsCard;
