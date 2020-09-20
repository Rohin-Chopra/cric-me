import React from "react";
import { Card } from "react-bootstrap";

import "./Card.css";
const MyCard = ({ children, className, bodyClassName }) => {
  return (
    <Card className={`bg-primary ${className}`}>
      <Card.Body className={bodyClassName}>{children}</Card.Body>
    </Card>
  );
};
export default MyCard;
