import React from "react";

const PlayerDataRow = ({ property, value }) => {
  return (
    <div>
      <p>
        <span className="font-weight-bold">{property}</span>{" "}
        <span>{value}</span>
      </p>
    </div>
  );
};
export default PlayerDataRow;
