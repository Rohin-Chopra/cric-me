import React from "react";

const FactPlaceholder = ({ loading }) => {
  return loading ? (
    <div class="ui placeholder " style={{ maxWidth: "100%" }}>
      <div class="long line"></div>
      <div class="long line"></div>
    </div>
  ) : null;
};

export default FactPlaceholder;
