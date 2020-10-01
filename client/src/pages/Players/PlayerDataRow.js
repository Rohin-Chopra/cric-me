import React from "react";

const PlayerDataRow = ({ property, value }) => {
  return value ? (
    <div>
      <p>
        <span className="font-weight-bold">{property}</span>{" "}
        <span>{value}</span>
      </p>
    </div>
  ) : null;
};
export default PlayerDataRow;
