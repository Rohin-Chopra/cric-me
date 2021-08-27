import React from "react";

import Card from "./Card";
import "./Card.css";

export default Card;

export const CardHeader = ({ className = "", children }) => {
  return (
    <div className={`bg-secondary card-header  ${className}`}>{children}</div>
  );
};
